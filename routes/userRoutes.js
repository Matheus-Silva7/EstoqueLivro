const express = require("express");
const router = express.Router();

const auth = require("../controllers/userController");

const { validateEmail, validateName, validatePassword } = require("../services/validators");

router.post('/singup', [validateEmail, validateName, validatePassword], auth.signUpUser);
router.post('/singin', [validateEmail, validatePassword], auth.signInUser);

module.exports = router;
