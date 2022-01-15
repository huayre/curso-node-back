const User = require("../models/user");
const bcrypt = require('bcrypt')

async function listUser() {
    const listUsers = await User.find({});
    return listUsers;
}

async function createUser(request) {
    try {
        let datanewUser = request;
        const existEmail = await User.findOne({email: datanewUser.email});
        if (existEmail) {
            return {status: 400, ok: false, message: 'email already exists'};
        } else {
            const encryptedPassword = bcrypt.hashSync(datanewUser.password, 10);
            datanewUser.password = encryptedPassword;
            const newUser = await User.create(datanewUser);
            const { password, ...response } = newUser._doc;
            return {status: 200, ok: true, message: response};
        }
    } catch (e) {
        return {status: 500, ok: false, message: e.toString()};
    }
}

async function updateUser(id, request) {
    try {

        const {email, ...dataUser} = request;
        const findUserUpdate = await User.findById(id);
        if (!findUserUpdate) {
            return {status: 404, ok: false, message: 'user not found'};
        }
        if (findUserUpdate.email !== email) {
            const existEmail = await User.findOne({email});
            if (existEmail) {
                return {status: 400, ok: false, message: 'email already exists'};
            }
        }
        dataUser.email = email;
        const encryptedPassword = bcrypt.hashSync(dataUser.password, 10);
        dataUser.password = encryptedPassword;
        const userUpdated = await User.findByIdAndUpdate(id, dataUser, {new: true});
        return {status: 200, ok: true, message: userUpdated};

    } catch (e) {
        return {status: 500, ok: false, message: e.toString()};
    }
}

module.exports = {
    createUser: createUser,
    listUser: listUser,
    updateUser: updateUser
}