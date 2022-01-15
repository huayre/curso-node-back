const {Router} = require('express');
const {login} = require('../app/controllers/authController')
const {check} = require("express-validator");
const {validate} = require("../app/middlewares/validateMiddleware");

const router = Router();
router.post('/login',
    [
        check('email').notEmpty().withMessage('email is required').isEmail().withMessage('error format email'),
        check('password',).notEmpty().withMessage('name is required'),
        validate
    ],
    login
)
module.exports = router;