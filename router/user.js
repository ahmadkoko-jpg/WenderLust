const express = require('express');
const router = express.Router();
const WrapAsync = require('../utils/WrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleWare');
const Controlleruser = require('../Controllers/User');

// SignUp Routes
router.route('/signUp')
    .get(Controlleruser.SignUp) 
    .post(WrapAsync(Controlleruser.PostSignUp)); // Yeh async function hai isliye WrapAsync sahi hai

// Login Routes
router.route('/login')
    .get(Controlleruser.login)
    .post(
        saveRedirectUrl, 
        passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
        Controlleruser.PostLogin
    );

module.exports = router;
