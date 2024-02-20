const constants = require('../core/constants');

const errorHandler = (err, req, res, next) => {
    const { type, http_code, message, rules } = err;
    if (http_code && message) {
        res.status(http_code).json({
            type,
            message,
            http_code,
            rules,
        });
    } else {
        res.status(500).json({
            type: 'internal',
            message: constants.ERROR.internalError,
            http_code: 500,
        });
    }
};

module.exports = errorHandler;