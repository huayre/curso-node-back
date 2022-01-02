const {Router} = require("express");
const router = Router();
const {index, store} = require('../app/controllers/userController');
router.get('/', index);
router.post('/', store);

module.exports = router;