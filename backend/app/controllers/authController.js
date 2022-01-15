const authService = require('../services/authService');
const login = async (req, res) => {
    const response = await authService.login(req.body);
    res.status(response.status).json({
        ok: response.ok,
        message: response.message
    });
}
module.exports = {
    login: login
}