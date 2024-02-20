const authRepository = require('../repositories/authRepository');
const { loginValidation } = require('../core/adapters/validations/user');
const { InputValidationError, DataNotExistsError, InternalError } = require('../models/local/error');
const constants = require('../core/constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const login = async (data) => {
    // validate data
    const { error } = loginValidation(data);
    if (error) throw new InputValidationError(constants.ERROR.fieldValidation, error.details[0].message);

    // find user
    const accountExist = await authRepository.findByEmail(data.email);
    if ((accountExist?.length ?? 0) == 0) throw new DataNotExistsError(constants.ERROR.loginValidation);

    const validate = bcrypt.compareSync(data.password, accountExist[0].password);
    if (!validate) throw new DataNotExistsError(constants.ERROR.loginValidation);

    const token = jwt.sign({
        idUser: accountExist[0].idUser,
        createdAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix()
    }, process.env.JWT);
    if (!token) throw new InternalError(constants.ERROR.internalError);
    return token;
};

const validateSecret = async (data) => {
    const secretExists = await authRepository.findBySecret(data);
    if ((secretExists?.length ?? 0) == 0) throw new DataNotExistsError(constants.ERROR.loginValidation);
    
    const userInfo = {
        idUser: secretExists[0].idUser,
        idRol: secretExists[0].idRol,
        key: secretExists[0].key,
        idStatus: secretExists[0].idStatus,
    };
    return userInfo;
};

module.exports = {
    login,
    validateSecret,
};