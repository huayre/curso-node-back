const {Router} = require('express');
const {validateToken} = require("../app/middlewares/validatejwtMiddleware");
const {index, store} = require('../app/controllers/medicoController');
const {check} = require("express-validator");
const {validate} = require("../app/middlewares/validateMiddleware");
const router = Router();

router.get('/', validateToken, index);
router.post('/', [
    validateToken,
    check('name').notEmpty().withMessage('field name is required'),
    check('hospital').notEmpty().withMessage('field hospital is required').isMongoId().withMessage('field hospital invalid'),
    validate
], store);
module.exports = router;