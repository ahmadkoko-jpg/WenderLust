const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Add .default at the end of the require statement
const passportLocalMongoose = require('passport-local-mongoose').default || require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);