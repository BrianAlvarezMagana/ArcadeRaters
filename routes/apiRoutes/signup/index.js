const { createSignup, getAllSignUp, } = require('../../../controllers/signupController');
const router = require('express').Router();


router.get('/', getAllSignUp);
router.post('/', createSignup);


module.exports = router;