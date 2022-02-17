const {Router} = require('express');
const {validateToken} = require('../app/middlewares/validatejwtMiddleware');
const {validate} = require('../app/middlewares/validateMiddleware');
const {index, store} = require('../app/controllers/hospitalController');
const {check} = require("express-validator");
const router = Router();

router.get('/', validateToken, index);
router.post('/', [
        validateToken,
        check('name').notEmpty().withMessage('field name is required'),
        validate
    ],
    store
)

module.exports = router;