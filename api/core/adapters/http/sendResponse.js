const responseSuccess = (res, obj) => {
    obj.user = null;
    res.send({
        result: obj
    });
};

module.exports = responseSuccess;