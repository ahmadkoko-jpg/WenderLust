const express = require('express');
const router = express.Router();
const WrapAsync = require('../utils/WrapAsync.js');
const isLoggedIn = require('../middleWare.js');
const Listing = require('../models/listing');
const multer = require('multer')
const upload = require('../config/storage')

let ControllerListing = require('../Controllers/listings.js');

// 1. Root Router Chain ("/")
router.route("/")
    .get(WrapAsync(ControllerListing.index))
    .post(
        isLoggedIn, 
        upload.single('listings[image]'),
        WrapAsync(ControllerListing.PostRoute)
    );
    
    
// 2. Fixed Endpoints (MUST be above /:id)
router.get('/new', isLoggedIn, ControllerListing.renderNewForm);

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You are logged out successfully!");
        
        req.session.save((err) => {
            if (err) return next(err);
            res.redirect('/listings');
        });
    });
});

// 3. Sub-paths under dynamic parameters
router.get('/:id/Edit', isLoggedIn, WrapAsync(ControllerListing.UpdateRoute));

// 4. Dynamic Parameter Router Chain ("/:id")
router.route('/:id')
    .get(isLoggedIn, WrapAsync(ControllerListing.ShowListings))
    .put(
        upload.single('listings[image]'),
        WrapAsync(ControllerListing.EditSHow)
    )
    .delete(isLoggedIn, WrapAsync(ControllerListing.DeleteRoute));

module.exports = router;