const userService = require('../services/userService');
const {response} = require('express')

const index = async (req, res) => {
    const listUser = await userService.listUser();
    res.json({
        ok: true,
        data: listUser,
        id_user_request : req.request_user
    });
}
const store = async (req, res = response) => {
    const response = await userService.createUser(req.body);
    res.status(response.status).json({
        ok: response.ok,
        message: response.message
    });
}
const update = async  (req, res = response) => {
    const response = await userService.updateUser(req.params.id, req.body);
    res.status(response.status).json({
        ok: response.ok,
        message: response.message
    });
}
const destroy = async (req, res = response) => {
    const response = await userService.deleteUser(req.params.id);
    res.status(response.status).json({
        ok: response.ok,
        message: response.message
    });
}
module.exports = {
    index: index,
    store: store,
    update: update,
    destroy: destroy
}