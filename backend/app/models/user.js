const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const {Model, Schema} = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    img: {
        type: String,

    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    }
}, {
        versionKey: false,
        timestamps :true,
    });
userSchema.plugin(mongoosePaginate);
module.exports  = mongoose.model('User', userSchema);

