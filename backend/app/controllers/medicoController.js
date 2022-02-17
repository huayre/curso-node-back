const medicoService = require('../services/medicoService');
const {response} = require("express");

const index = async (req, res = response) => {
    const response = await medicoService.listMedics();
    res.status(200).json({
        ok: true,
        data: response,
        id_user_request : req.request_user
    })
}
const store = async (req, res) => {
    const response = await medicoService.createMedic(req);
    res.status(response.status).json({
        ok: response.ok,
        data: response.data,
        id_user_request : req.request_user
    })
}
module.exports = {
    index: index,
    store: store
}