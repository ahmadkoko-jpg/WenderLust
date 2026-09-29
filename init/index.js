const mongoose = require('mongoose');
const initData = require('./data.js')
const Listing = require('../models/listing.js')

main()
    .then(() => console.log("Connection Done Successfully"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
    await Listing.deleteMany({});
  initData.data =   initData.data.map((e) => ({...e,owner:"6aa77a7bc23400a77c0bd368"}))
    await Listing.insertMany(initData.data)
    console.log("Database was initialized")
}

initDB();


