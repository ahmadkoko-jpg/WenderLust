const mongoose = require('mongoose');
const Reviews = require('./Reviews'); // Ensure this file path is correct
const User = require('./user');       // Ensure user.js uses module.exports = mongoose.model(...)

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
            url:String,
            filename:String
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reviews" // 👈 Changed "Reviews" to "Review" (assuming singular model registration)
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"   // 👈 Matches mongoose.model("User", UserSchema)
    },
  geometry: {
    type: {
      type: String,
      enum: ['Point'], // GeoJSON point type
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude] array
      required: true
    }
  }
});


listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Reviews.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;