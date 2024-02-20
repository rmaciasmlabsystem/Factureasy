const userRepository = require('../repositories/userRepository');
const { loginValidation } = require('../core/adapters/validations/user');
const { InputValidationError, DataValidationError } = require('../models/local/error');
const constants = require('../core/constants');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const createUser = async (data) => {
    // validate data
    const { error } = loginValidation(data);
    if (error) throw new InputValidationError(constants.ERROR.fieldValidation, error.details[0].message);

    // encryp the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);
    data.password = hashPassword;

    // validate account info
    const accountExist = await userRepository.findByEmail(data.email);
    if (accountExist.length > 0) throw new DataValidationError(constants.ERROR.accountValidation);

    // create new account
    await userRepository.createUser(data);
}

const createUserApi = async (data) => {
    // genera secretKey
    const guid = uuidv4().split('-');
    const body = {
        key: guid.join(''),
        idUser: data.user.idUser,
        idRol: 1,
    };

    // create new userApi
    await userRepository.createUserApi(body);
    return body.key;
}

const getAllUserApi = async (data) => {
    const userList = await userRepository.findAllUserApi(data.user.idUser);
    let userListMapped = [];
    userList.forEach(e => userListMapped.push({
        idUserApi: e.idUserApi,
        idUser: e.idUser,
        key: e.key,
        idStatus: e.idStatus,
    }));
    return userListMapped;
}

module.exports = {
    createUser,
    createUserApi,
    getAllUserApi,
};