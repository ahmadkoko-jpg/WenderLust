const User = require('../models/user');

module.exports.SignUp = (req, res) => {
    res.render('./user/signUp.ejs');
};

// 1. Parameter me 'next' add kiya
module.exports.PostSignUp = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err); // Ab next safe hai
            }
            // Spelling corrected to "success"
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect('/listings');
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect('/signup');
    }
};

module.exports.login = (req, res) => {
    res.render('./user/login.ejs');
};

module.exports.PostLogin = async (req, res) => {
    // Spelling corrected to "success"
    req.flash("success", "Welcome Back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};