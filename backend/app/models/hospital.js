const {Schema, model} = require("mongoose");

const HospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    created_user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = model('Hospital', HospitalSchema)