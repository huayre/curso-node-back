const medicoModel = require('../models/medico')
const hospitalModel = require('../models/hospital')
const {request} = require("express");
const {body} = require("express-validator");

async function listMedics() {
    const listMedics = await medicoModel.find({}).populate('user','name')
        .populate('hospital','name');
    return listMedics;
}

async function createMedic(req = request) {

    const {hospital} = req.body;
    const findMedic = await hospitalModel.findById(hospital);
    if (!findMedic) {
        return {status: 400, ok: false, data: 'not found hospital'};
    }
    try {
        const newMedic = await medicoModel.create({...req.body, user: req.request_user});
        return {status: 200, ok: true, data: newMedic};
    } catch (e) {
        return {status: 500, ok: false, data: e.toString()};
    }

}

module.exports = {
    listMedics: listMedics,
    createMedic: createMedic
}