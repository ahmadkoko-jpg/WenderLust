const express = require("express");
const router = express.Router({ mergeParams: true });
const WrapAsync = require("../utils/WrapAsync.js");
const { reviewSchema } = require("../Schema.js");
const isLoggedIn = require('../middleWare.js')
const ControllerReviews = require('../Controllers/reviews.js')

const reviewValidation =  (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    throw error;
  } else {
    next();
  }
};


router.post(
  "/",
  isLoggedIn,
  reviewValidation,
  WrapAsync(ControllerReviews.ReviewPost));



// Delete Route
router.delete(
  "/:Reid",
  isLoggedIn,  
  WrapAsync(ControllerReviews.ReviewDelete));


router.use((err, req, res, next) => {
  res.render("err.ejs", { err });
});

module.exports = router;
