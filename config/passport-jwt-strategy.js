const passport = require('passport');
const JWTSrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctors');

let opts ={
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : "hospitalapi"
}

passport.use(new JWTSrategy(opts, function(jwtPayLoad,done){
    Doctor.findById(jwtPayLoad._id).then((doctor)=>{
        if(doctor){
            return done(null,doctor);
        }else{
            return done(null,false);
        }
    }).catch((err)=>{
        console.log("err",err);
    });
}));

module.exports=passport;