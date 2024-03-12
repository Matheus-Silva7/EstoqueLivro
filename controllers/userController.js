const { validationResult } = require("express-validator");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET = "matheustools"

exports.signUpUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.error("Erros de validação:", errors.array());
            const error = new Error("Falha de validação");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }

        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;

        const passHashed = await bcrypt.hash(password, 12);

        const user = new User({
            email: email,
            name: name,
            password: passHashed,
        });

        const result = await user.save();

        res.status(201).json({
            message: "Usuário criado com sucesso!",
            result: result
        });
    } catch (error) {
        console.error("Erro no signUpUser:", error);
        res.status(error.statusCode || 500).json({
            message: error.message,
            result: error.data
        });
    }
};

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end()

        req.userId = decoded.userId;
        next()
    })
}

exports.signInUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;


    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error("Falha de validação");
        }

        const passIsEqual = await bcrypt.compare(password, user.password);

        if (!passIsEqual) {
            return res.status(401).json({ message: "Senha inválida..." });
        }

        const token = jwt.sign({ userId: user._id.toString() }, SECRET, { expiresIn: 300 })
        res.status(200).json({ message: "Usuário logado com sucesso!", auth: true, token });
      //  console.log(user._id.toString())

    } catch (error) {
        console.error("Erro no signInUser:", error);
        res.status(500).json({
            message: "Erro ao autenticar o usuário.",
            error: error.message
        });
    }
};
