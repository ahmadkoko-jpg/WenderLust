require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/user.js");
const initData = require('./init/data.js')
const Listing = require('./models/listing.js')

// Routes Imports
const listing = require('./router/listing');
const reviews = require('./router/review.js');
const userRouter = require('./router/user.js');
const  ATLASDB_URL='mongodb://zaheerabbas12hk_db_user:UPxGc2xaPyxOkco9@ac-8dnemyi-shard-00-00.b7uwbpu.mongodb.net:27017,ac-8dnemyi-shard-00-01.b7uwbpu.mongodb.net:27017,ac-8dnemyi-shard-00-02.b7uwbpu.mongodb.net:27017/?ssl=true&replicaSet=atlas-s3fe1t-shard-0&authSource=admin&appName=Cluster0'

const port = 8080;

// Database Connection
main()
    .then(() => console.log("Connection Done Successfully"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(ATLASDB_URL);
}

// EJS & App Configurations
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser("Secret Code"));

const { MongoStore } = require("connect-mongo");

const store = new MongoStore({
    mongoUrl:ATLASDB_URL,
    crypto:{
        secret:"mysecretCode"
    },
    touchAfter:24*3600,
})

store.on("error",() => {
    console.log("Error in Mongo Session store",err)
})

// Session Setup
const sessionOptions = {
    store,
    secret: "mySuperSecretCnodeode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Local Variables Middleware (HAMESHA Passport ke BAAD)
app.use((req, res, next) => {
    res.locals.Succes = req.flash("Succes");
    res.locals.Deleted = req.flash("Deleted");
      res.locals.Succeses = req.flash("Succeses")
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user; 
    next();
});


const initDB = async () => {
    await Listing.deleteMany({});
  initData.data =   initData.data.map((e) => ({...e,owner:"6aa77a7bc23400a77c0bd368"}))
    await Listing.insertMany(initData.data)
    console.log("Database was initialized")
}

initDB();

// Routes
app.use('/listings', listing);
app.use('/listings/:id/reviews', reviews);
app.use('/', userRouter);

// Global Error Handler (HAMESHA Sab Routes ke AAKHIR me hona chahiye)
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("err.ejs", { err });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

module.exports = app.js