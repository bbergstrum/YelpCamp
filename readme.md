# Yelpcamp 
---
Yelpcamp is a fictitious web based application which posts crowd-sourced reviews about local campgrounds
Yelpcamp is based off the popular Yelp.com (a web based application which posts crowd-sourced reviews about local businesses).
## Features
---
#### Users
  - View campgrounds available.
  - Sign-up with their own credentials and create their own account.
  - Login with their account credentials.
  - Create, post and comment on campgrounds.
  - Remove own posts and comments.
#### Campgrounds
  - View a variety of campgrounds.
  - Select individual campgrounds for further information.
  - Each campground has a description, an image and a location.
  - Each campground location is viewed using a Google maps API plugin.
### Technology
---
Yelpcamp is a full-stack web application with a non-relational database.
Yelpcamp utilizes a variety of open-source libraries and frameworks. 

Front-end
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - high-level, interpreted programming language.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - standard mark-up language for creating web pages and web applications.
* [Bootstrap](https://getbootstrap.com/) - open source toolkit for developing with HTML, CSS, and JS.
* [jQuery](https://jquery.com/) -  cross-platform JavaScript library designed to simplify the client-side scripting of HTML.

Back-end
* [node.js](https://nodejs.org/en/) - JavaScript run-time environment that executes JavaScript code server-side. 
* [express.js](https://expressjs.com/) - minimalist web framework for Node.js
* [mongoDB](https://www.mongodb.com/) - open-source cross-platform document-oriented database program.
* [mongoose.js](https://mongoosejs.com/) - mongodb object modelling for Node.js.
* [moment.js](https://momentjs.com/) - parse, validate, manipulate, and display dates and times in JavaScript.
* [node-geocoder](https://github.com/nchaulet/node-geocoder#readme) - Node.js library for geocoding and reverse geocoding.
* [method-overide](https://github.com/expressjs/method-override#readme) - override HTTP verbs.

Middleware
* [express-session](https://github.com/expressjs/session) - session middleware for Express.js
* [passport.js](http://www.passportjs.org/) - authentication for Node.js.
* [connect-flash](https://github.com/jaredhanson/connect-flash) - flash message middleware for Connect and Express.js
* [body-parser](https://github.com/expressjs/body-parser#readme) - Node.js body parsing middleware
### Plugins
---
Yelpcamp utilizes Google maps API to stage the location of campgrounds.
[Google Maps API](https://cloud.google.com/maps-platform/)
### Deployment
---
You can find the deployed front end here: [Yelpcamp](https://murmuring-basin-79570.herokuapp.com/)
Yelpcamp is deployed on [Heroku](https://www.heroku.com/) (a cloud application platform) with intentions to migrate to AWS in the future.
### Development
---
To view development stages please refer to the development readme in this reposoitory.

### License
----
MIT
