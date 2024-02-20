const responseSuccess = require('../core/adapters/http/sendResponse');
const authService = require('../services/authService');

const login = async (req, res, next) => {
    try {
        const jwt = await authService.login(req.body);
        responseSuccess(res, jwt);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    login,
};