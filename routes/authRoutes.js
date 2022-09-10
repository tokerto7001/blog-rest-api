const router = require('express').Router();
const validateBodyElements = require('../middlewares/validateBodyElements');
const { register, verify, login, forgotPassword } = require('../controllers/authController');

router
    .post('/register', validateBodyElements(["firstName", "lastName", "mail", "password", "passwordConfirm"]), register)
    .get('/user-verify', verify)
    .post('/login', validateBodyElements(["mail", "password"]), login)
    .post('/forgot-password', validateBodyElements(["mail"]), forgotPassword)

module.exports = router;