const Listing = require('../models/listing');

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN; 
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.index = async(req,res) => {
   let AllListings = await Listing.find();
    res.render('./listings/index.ejs',{AllListings})
};

module.exports.renderNewForm = (req,res) => {
    res.render('./listings/new.ejs')
};


module.exports.ShowListings = async (req, res) => {
    let { id } = req.params;
    // Reviews aur uske author/user dono ko populate karein
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate:{
                path:"owner"
            }
        })
        .populate("owner");
       console.log(listing)
    if (!listing) {
        req.flash("error", "Listing you want doesn't exist");
        return res.redirect('/listings');
    }
    res.render('./listings/Show.ejs', { listing })};



    module.exports.PostRoute = async (req, res, next) => {
  let response =   await geocodingClient.forwardGeocode({
        query: req.body.listings.location,
        limit: 2
        }).send()
    let listing = (req.body.listings); 
         listing.owner = req.user;
         listing.image={
            url:req.file.path,
            filename:req.file.filename
         }
    listing.geometry = response.body.features[0].geometry;
    let data = new Listing(listing);
   let saved =  await data.save();
   console.log(saved)
    req.flash("Succes","User created succesfully");
    res.redirect("/listings")};



    module.exports.UpdateRoute = async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id).populate('owner');
        if (!listing) {
            req.flash("error", "Listing does not exist!");
            return res.redirect("/listings");
        }
        if (!listing.owner || !listing.owner._id.equals(req.user._id)) {
            req.flash("error", "You don't have permission to edit this listing!");
            return res.redirect(`/listings/${id}`);
        } 
        res.render('listings/edit.ejs', { listing })};



 module.exports.EditSHow = async (req, res) => {
    let { id } = req.params;

    // 1. Existing listing find karke basic details update karein
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listings });

    // 2. Agar user ne NAYI IMAGE upload ki hai, toh hi image update karein
    if (typeof req.file !== "undefined") {
        console.log(req.file)
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
};



    module.exports.DeleteRoute = async(req,res) => {
    let {id} = req.params
    await Listing.findByIdAndDelete(id);
     req.flash("Deleted","User Deleted");
    res.redirect('/listings')};