const {Schema, model} = require('mongoose');

const medicoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }
})
module.exports = model('Medico', medicoSchema);
