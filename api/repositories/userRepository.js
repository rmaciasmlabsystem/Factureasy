const user = require('../models/user');
const userApi = require('../models/userApi');

// find methods
const findByEmail = async (mail) => await user.findAll({ where: { mail: mail } });
const findById = async (id) => await user.findOne({ where: { idUser: id } });
const findAllUserApi = async (id) => await userApi.findAll({ where: { idUser: id, idStatus: [1, 2] } });

// create methods
const createUser = async (data) => {
    const object = await user.create({
        idLicence: 1,
        idTemplate: 0,
        mail: data.email,
        password: data.password,
    });
    await object.save();
};

const createUserApi = async (data) => {
    const object = await userApi.create({
        idUser: data.idUser,
        idRol: data.idRol,
        key: data.key,
    });
    await object.save();
};

module.exports = {
    findByEmail,
    findById,
    findAllUserApi,
    createUser,
    createUserApi,
};