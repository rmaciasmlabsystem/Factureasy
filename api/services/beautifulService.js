const beautifulRepository = require('../repositories/beautifulRepository');
const { beautifulValidation } = require('../core/adapters/validations/beautiful');
const { InputValidationError } = require('../models/local/error');

const createBeautiful = async (data) => {
    // validate data
    const { error } = beautifulValidation(data);
    if (error) throw new InputValidationError(constants.ERROR.fieldValidation, error.details[0].message);

    // validar xml
    const timbreFiscal = data.xmlFile.Complemento.TimbreFiscalDigital.$;
    const conceptos = data.xmlFile.Conceptos;
    const emisor = data.xmlFile.Emisor.$;
    const receptor = data.xmlFile.Receptor.$;
    const impuestos = data.xmlFile.Impuestos;


    // find user

    // save info
};

module.exports = {
    createBeautiful,
};