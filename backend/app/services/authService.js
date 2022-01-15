const User = require('../models/user');
const jwt = require('../helpers/jwt');
const bcrypt = require('bcrypt');

async function login(request) {
    try {
        const findUser = await User.findOne({email: request.email}).select('+password');
        if (!findUser) {
            return {status: 400, ok: false, message: 'user not found'};
        }
        const validatePassword = bcrypt.compareSync(request.password, findUser.password);
        if (!validatePassword) {
            return {status: 400, ok: false, message: 'password invalid'};
        }
        const token = jwt.generateJWT(findUser._id);
        const {password, ...response} = findUser._doc;
        response.token = token;
        return {status: 200, ok: true, message: response};

    } catch (e) {
        return {status: 500, ok: false, message: e.toString()};
    }
}

module.exports = {
    login: login
}