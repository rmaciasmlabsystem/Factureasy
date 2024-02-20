const jwt = require('jsonwebtoken');
const moment = require('moment');
const { UnAuthorizeError } = require('../models/local/error');
const constants = require('../core/constants');
const authService = require('../services/authService');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.header('authorization');
    if (typeof bearerHeader !== 'undefined') {
        // get token
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        // verify token
        const verified = jwt.verify(bearerToken, process.env.JWT);
        if (moment().unix() > verified.expiresAt) {
            throw new UnAuthorizeError(constants.ERROR.tokenExpired);
        } else {
            req.user = verified;
            next();
        }
    } else {
        throw new UnAuthorizeError(constants.ERROR.tokenFail);
    }
};

const verifySecretKey = async (req, res, next) => {
    const secretHeader = req.header('Secret-Factureasy-Key');
    if (typeof secretHeader !== 'undefined') {
        const userInfo = await authService.validateSecret(secretHeader);
        req.user = userInfo;
        next();
    } else {
        throw new UnAuthorizeError(constants.ERROR.tokenFail);
    }
};


module.exports = {
    verifyToken,
    verifySecretKey
};