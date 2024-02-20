const user = require('../models/user');
const userApi = require('../models/userApi');

const findByEmail = async (mail) => {
    return await user.findAll({ where: { mail: mail } });
}

const findBySecret = async (secret) => {
    return await userApi.findAll({ where: { key: secret } });
};

module.exports = {
    findByEmail,
    findBySecret,
};