module.exports = isLoggedIn=(req,res,next) => {
    if(!req.isAuthenticated()){
        req.session.url = req.originalUrl;
        req.flash("error","Your must be Loggedin to create a Listing")
        return res.redirect('/login')
    }
    next()
}

// Going with Oringnal Url
module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.url){
        res.locals.redirectUrl = req.session.url
    }
    next()
}