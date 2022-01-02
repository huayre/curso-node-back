const User = require('../models/user');

const index = async (req, res) => {
    const users = await  User.find({});
    res.json({
        ok: true,
        data: users
    });
}
const store = async (req, res) => {
    const {name, password, email} = req.body;
    const newUser = new User(req.body);
    await newUser.save();
    res.json({
        ok: true,
        data: newUser
    })
}
module.exports = {
    index: index,
    store: store
}