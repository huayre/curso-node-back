const jwt = require('jsonwebtoken');
const {request, response} = require('express');

const validateToken = (req = request, res = response, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({
                ok: false,
                message: 'token not found'
            });
        }
        const tokenValidate = token.replace('Bearer', '').trim();
        const resultTokenValue = jwt.verify(tokenValidate, process.env.JWT_SECRET);
        req.request_user = resultTokenValue.user_id;
        next();
    } catch (e) {
        return res.status(500).json({
            ok: false,
            message: 'token not valid'
        });
    }
}
module.exports = {
    validateToken: validateToken
}