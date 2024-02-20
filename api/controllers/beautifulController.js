const responseSuccess = require('../core/adapters/http/sendResponse');
const beautifulService = require('../services/beautifulService');

const createBeautiful = async (req, res, next) => {
    try {
        var asd = req.rawBody;
        await beautifulService.createBeautiful(req.body);
        responseSuccess(res, req.body);
    } catch(error) {
        next(error);
    }
};

module.exports = {
    createBeautiful,
};
