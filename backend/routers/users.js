const {Router} = require("express");
const {check} = require('express-validator');
const {validate} = require('../app/middlewares/validateMiddleware');
const {index, store, update, destroy} = require('../app/controllers/userController');
const {validateToken} = require('../app/middlewares/validatejwtMiddleware')
const router = Router();
router.get('/', validateToken, index);
router.post('/',
    [
        validateToken,
        check('name',).notEmpty().withMessage('name is required'),
        check('email').notEmpty().withMessage('email is required').isEmail().withMessage('error format email'),
        check('password').notEmpty(),
        validate
    ],
    store);
router.put('/:id',
    [
        validateToken,
        check('name',).notEmpty().withMessage('name is required'),
        check('email').notEmpty().withMessage('email is required').isEmail().withMessage('error format email'),
        validate
    ],
    update
);
router.delete('/:id', validateToken, destroy);
module.exports = router;