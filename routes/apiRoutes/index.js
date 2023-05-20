const router = require('express').Router();
const signupRoute = require('./signup');
const loginRoute = require('./login');

router.use('/signup', signupRoute);
router.use('/login', loginRoute);

module.exports = router;