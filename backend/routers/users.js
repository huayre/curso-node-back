const {Router} = require("express");
const {check} = require('express-validator')
const router = Router();
const {index, store} = require('../app/controllers/userController');
const {validate} = require('../app/middlewares/validateMiddleware');
router.get('/', index);
router.post('/',
    [
        check('name',).notEmpty().withMessage('name is required'),
        check('email').notEmpty().withMessage('email is required').isEmail().withMessage('error format email'),
        check('password').notEmpty(),
        validate
    ],
    store);

module.exports = router;