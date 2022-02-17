const uploadService = require("../services/uploadService");
const {response} = require("express");
const storeFile = async (req, res = response) => {
    const response = await uploadService.storeFile(req, res);
    res.status(response.status).json({
        ok: response.ok,
        data: response.data,
        id_user_request: req.request_user
    });
}

module.exports = {
    storeFile: storeFile
}