const {request, response} = require("express");
const {v4: uuidv4} = require('uuid');
const {updateImage} = require('../helpers/helperFile');

const storeFile = async (req = request, res = response) => {
    const type = req.params.type;
    const id = req.params.id;
    const filesValid = ['medico', 'hospital', 'user']
    const extensionFileValid = ['png', 'jpeg', 'jpg', 'jif']
    if (!filesValid.includes(type)) {
        return {status: 400, ok: false, data: 'The parameter is not correct'};
    }
    if (!req.files || Object.keys(req.files).length === 0) {
        return {status: 400, ok: false, data: 'No files were uploaded'};
    }
    const image = req.files.image;
    const extensionFile = image.name.split('.');
    if (!extensionFileValid.includes(extensionFile[extensionFile.length - 1])) {
        return {status: 400, ok: false, data: 'file ' + extensionFile[extensionFile.length - 1] + ' not allowed'};
    }
    const newFileName  = uuidv4() + '.' + extensionFile[extensionFile.length - 1];
    const uploadPath = './public/image/' + type + '/' + newFileName;

    try {
        await image.mv(uploadPath);
        const status = await updateImage(type, id, newFileName);
        if (!status) {
            return {status: 400, ok: false, data: type + ' not fount'};
        }
        return {status: 200, ok: true, data: type + ' photo upload success'};
    } catch (e) {
        return {status: 500, ok: false, data: e.toString()};
    }
}

module.exports = {
    storeFile: storeFile
}