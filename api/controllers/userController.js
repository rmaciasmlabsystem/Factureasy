const responseSuccess = require('../core/adapters/http/sendResponse');
const userService = require('../services/userService');

const createUser = async (req, res, next) => {
    try {
        await userService.createUser(req.body);
        req.body.password = undefined;
        responseSuccess(res, req.body);
    } catch(error) {
        next(error);
    }
}

const createUserApi = async (req, res, next) => {
    try {
        const key = await userService.createUserApi(req);
        responseSuccess(res, key);
    } catch(error) {
        next(error);
    }
}

const getAllUserApi = async (req, res, next) => {
    try {
        const userList = await userService.getAllUserApi(req);
        responseSuccess(res, userList);
    } catch(error)  {
        next(error);
    }
}

module.exports = {
    createUser,
    createUserApi,
    getAllUserApi,
};