const beautifulRepository = require('../repositories/beautifulRepository');
const { beautifulValidation } = require('../core/adapters/validations/beautiful');
const { InputValidationError, DataValidationError } = require('../models/local/error');

const createBeautiful = async (data) => {
    // validate data
    const { error } = beautifulValidation(data);
    if (error) throw new InputValidationError(constants.ERROR.fieldValidation, error.details[0].message);

    // validar xml

    // find user

    // save info
};

module.exports = {
    createBeautiful,
};