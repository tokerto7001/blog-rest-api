const router = require('express').Router();
const validateBodyElements = require('../middlewares/validateBodyElements');
const { register, verify } = require('../controllers/authController');

router
    .post('/register', validateBodyElements(["firstName", "lastName", "mail", "password", "passwordConfirm"]), register)
    .get('/user-verify', verify)

module.exports = router;