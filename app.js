// =============================================================================
//                              Dependencies
var     express                 = require("express"),
        app                     = express(),
        bodyParser              = require("body-parser"),
        mongoose                = require("mongoose"),
        moment                  = require("moment"),
        flash                   = require("connect-flash"),
        passport                = require("passport"),
        LocalStrategy           = require("passport-local"),
        methodOverride          = require("method-override"),
        passportLocalMongoose   = require("passport-local-mongoose"),
        Campground              = require("./models/campground"),
        Comment                 = require("./models/comment"),
        User                    = require("./models/user"),
        seedDB                  = require("./seeds");
//                              requiring routes        
var     campgroundsRoutes       = require("./routes/campgrounds"),
        commentRoutes           = require("./routes/comments"),
        indexRoutes             = require("./routes/index");
// =============================================================================
//                              App Config
// Local Mongo DB
// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect(process.env.DATABASEURL);
// MONGOLAB HEROKU DB
// mongoose.connect("mongodb://bbyelp:bbyelp123@ds221271.mlab.com:21271/bbwebdev_yelpcamp");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); // seed the DB
// =============================================================================
//                              PASSPORT CONFIG
app.locals.moment = require('moment');
app.use(require("express-session")({
    secret: "remember use client sessions instead",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    // current user check
    res.locals.currentUser  = req.user;
    // if anythign in flash, provide access in .message for every page
    res.locals.error        = req.flash("error");
    res.locals.success      = req.flash("success");
    next();
})

app.use(indexRoutes);
app.use("/campgrounds", campgroundsRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
// =============================================================================
//                             LISTENER CALLBACK
app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("YelpCamp Started...")
});
