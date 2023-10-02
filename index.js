const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

//passport setup
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');


//middleware for form parser
app.use(express.urlencoded({ extended: true }));
  
app.use(passport.initialize());

//use express router
app.use('/', require('./router'));
app.listen(port, function(err){
    if (err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server set at port: ${port}`);
});