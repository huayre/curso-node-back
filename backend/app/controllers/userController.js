const User = require('../models/user');
const userService = require('../services/userService');
const {response} = require('express')

const index = async (req, res) => {
    const listUser = await userService.listUser();
    res.json({
        ok: true,
        data: listUser
    });
}
const store = async (req, res = response) => {
    const response = await userService.createUser(req.body);
    res.status(response.status).json({
        ok: response.ok,
        message: response.message
    });
}
module.exports = {
    index: index,
    store: store
}