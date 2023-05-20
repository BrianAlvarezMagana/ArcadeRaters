const { Signup }  = require('../model/index');


const createSignup = async (req, res) => {

    try {
        const users = await Signup.create({
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            conf_password: req.body.conf_password
        });
        console.log(users);
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getAllSignUp = async (req, res) => {
    const allData = req.body;
    try {
        const userData = await Signup.findAll(allData);
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }

};

module.exports = {
    createSignup,
    getAllSignUp,
};