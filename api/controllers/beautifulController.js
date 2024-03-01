const responseSuccess = require('../core/adapters/http/sendResponse');
const beautifulService = require('../services/beautifulService');

const createBeautiful = async (req, res, next) => {
    try {
        await beautifulService.createBeautiful(req.body);
        responseSuccess(res, req.body);
    } catch(error) {
        next(error);
    }
};

module.exports = {
    createBeautiful,
};
