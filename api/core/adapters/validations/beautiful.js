const joi = require('joi');

const emailListSchema = joi.string().custom((value, helpers) => {
    const emailArray = value.split(';');
    for (const email of emailArray) {
        const { error } = joi.string().email().validate(email.trim());
        if (error) {
            return helpers.error('any.custom', { messages: [error.message] });
        }
    }
    return value;
}, 'Email List Validation');

const beautifulValidation = data => {
    const schema = joi.object({
        xml: joi.string().required(),
        folio: joi.string().required(),
        fileName: joi.string().required(),
        templateId: joi.string().required(),
        destinationMail: emailListSchema,
    });
    return schema.validate(data);
};

module.exports = {
    beautifulValidation,
};