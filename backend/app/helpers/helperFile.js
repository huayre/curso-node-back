const file = require('fs');
const modelMedico = require('../models/medico');
const modelHospital = require('../models/hospital');
const modelUser = require('../models/user');
const {v4: uuidv4} = require("uuid");
const updateImage = async (type, id, newFileName) => {
    switch (type) {
        case 'medico' :
            const findMedico = await modelMedico.findById(id);
            if (!findMedico) {
                return false;
            }
            const pathPhotoMedico = './public/image/' + type + '/' + findMedico.img ;
            if (file.existsSync(pathPhotoMedico)) {
                file.unlinkSync(pathPhotoMedico);
            }
            findMedico.img = newFileName;
            await findMedico.save();
            return true;

            break;
        case 'user' :
            const findUser = await modelUser.findById(id);
            if (!findUser) {
                return false;
            }
            const pathPhotoUser = './public/image/' + type + '/' + findUser.img ;
            if (file.existsSync(pathPhotoUser)) {
                file.unlinkSync(pathPhotoUser);
            }
            findUser.img = newFileName;
            await findUser.save();
            return true;

            break;
        case 'hospital' :
            const findHospital = await modelHospital.findById(id);
            if (!findHospital) {
                return false;
            }
            const pathPhotoHospital = './public/image/' + type + '/' + findHospital.img ;
            if (file.existsSync(pathPhotoHospital)) {
                file.unlinkSync(pathPhotoHospital);
            }
            findHospital.img = newFileName;
            await findHospital.save();
            return true;

            break;
        default:
            break;
    }
}

module.exports = {
    updateImage : updateImage
}