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
### EC2 Setup
---
To setup a clone of YelpCamp on an EC2 follow the following steps:
  1. update the EC2 by the command: `sudo yum update`.
  2. install git by using the command: `sudo yum install git`.
  3. install npm by using the command: `sudo yum install npm`.
  4. install node by using the command: `sudo yum install node`.
  5. clone YelpCamp by using the command: `git clone https://github.com/bbergstrum/YelpCamp.git`.
  6. install all of YelpCamp's node packages by using the command `npm install -g`
  7. install forever by using the command: `npm install -g forever`.
  8. launch YelpCamp with environment variables using forever by using the command: 
    [Depricated] `DATABASEURL="mongodb://<user>:<password>@ds221271.mlab.com:21271/bbwebdev_yelpcamp" PORT=8080 IP="0.0.0.0" forever start app.js`.

    New connection string after migration from mlab to Atlas:
    `DATABASEURL="mongodb+srv://<username>:<password>@yelpcampcluster.hyj7z.mongodb.net/bbwebdev_yelpcamp?retryWrites=true&w=majority" PORT=8080 IP="0.0.0.0" forever start     app.js`.
    (replace <user> and <password> with valid mongoDB credentials).
### Deployment
---
  
You can find the deployed front end here: [Yelpcamp](http://ec2-54-211-17-84.compute-1.amazonaws.com:8080/)
Yelpcamp has been deployed with in an AWS environment running on an EC2.

You can also find the deployed front end here: [Yelpcamp](https://murmuring-basin-79570.herokuapp.com/)
Yelpcamp previously deployed on [Heroku](https://www.heroku.com/) (a cloud application platform).
### Development
---
To view development stages please refer to the development readme in this reposoitory.

### License
----
MIT
