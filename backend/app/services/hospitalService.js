const hospitalModel = require('../models/hospital');
const {request} = require("express");

async function listHospital() {
    const ListHospitals = await hospitalModel.find({}).populate('created_user', 'name img');
    return ListHospitals;
}

async function createHospital(request) {
  try {
      const newHospital =  await hospitalModel.create({
         ...request.body,
          created_user: request.request_user
      })
      return {status: 200, ok: true, data: newHospital};
  } catch (e) {
      return {status: 500, ok: false, data: e.toString()};
  }
}

module.exports = {
    listHospital: listHospital,
    createHospital: createHospital
}