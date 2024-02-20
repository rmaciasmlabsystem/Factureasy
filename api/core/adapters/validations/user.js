const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');

const joiPassword = joi.extend(joiPasswordExtendCore);

const loginValidation = data => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joiPassword.string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .onlyLatinCharacters()
        .required()
    });
    return schema.validate(data);
};

module.exports = {
    loginValidation,
};
