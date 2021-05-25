const express = require('express');
const { signup, signin, signout } = require('../../controller/doctor/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const { requireSignin } = require('../../common-middleware');
const router = express.Router();


router.post('/doctor/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/doctor/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/admin/signout', signout)


module.exports = router;