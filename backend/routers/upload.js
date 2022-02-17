const {Router} = require('express');
const {validateToken} = require("../app/middlewares/validatejwtMiddleware");
const {storeFile} = require('../app/controllers/uploadController')
const {check, body} = require("express-validator");
const {validate} = require("../app/middlewares/validateMiddleware");
const router = Router();

router.put('/:type/:id', validateToken, storeFile)

module.exports = router;