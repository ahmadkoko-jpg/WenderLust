const Reviews = require('../models/Reviews')
const Listing = require("../models/listing.js");


module.exports.ReviewPost = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    newReview.owner = req.user;
    await newReview.save();
    console.log(newReview)
    listing.reviews.push(newReview._id);
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
  };

  module.exports.ReviewDelete = async (req, res) => {
    let { id, Reid } = req.params;
    let review = await Reviews.findById(Reid);
    if (!review) {
      req.flash("error", "Review nahi mila!");
      return res.redirect(`/listings/${id}`);
    }
    if (!review.owner || !review.owner.equals(req.user._id)) {
      req.flash("error", "Aap ye review delete nahi kar sakte!");
      return res.redirect(`/listings/${id}`);
    } 
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: Reid } });
    await Reviews.findByIdAndDelete(Reid);

    req.flash("success", "Review Delete Ho Gaya!");
    res.redirect(`/listings/${id}`);
  };