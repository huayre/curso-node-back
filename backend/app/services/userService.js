const User = require("../models/user");

async function listUser() {
    const listUsers = await User.find({});
    return listUsers;
}

async function createUser(request) {
    const response = {};
    try {
        const {email, password, name} = request;
        const existEmail = await User.findOne({email});
        if (existEmail) {
            response.status = 400;
            response.ok = false;
            response.message = 'email already exists';
        } else {
            const newUser = new User(request);
            await newUser.save();
            response.status = 400;
            response.ok = false;
            response.message = newUser;
        }
    } catch (e) {
        response.status = 500;
        response.ok = false;
        response.message = e.toString();
    }
    return response;
}

module.exports = {
    createUser: createUser,
    listUser: listUser
}