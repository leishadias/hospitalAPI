const Doctor = require('../models/doctors');
const jwt = require('jsonwebtoken');

//login
module.exports.createSession = async function(req, res){
    try{
        let doctor = await Doctor.findOne({name: req.body.name});
        if (!doctor || doctor.password!=req.body.password){
            return res.status(422).json( {
                message: "Invalid username or password"
            });
        }
        return res.status(200).json( {
            message: "Sign in successful",
            data: {
                token: jwt.sign(doctor.toJSON(), 'hospitalapi', {expiresIn: '10000000000000000'})
            }
        });
    }catch(err){
        console.log(err);
        return res.status(500).json( {
            message: "Internal server error"
        });
    }
};

//create new user
module.exports.create = async function(req, res){
    try{
        //check if account already exists
        let doctor = await Doctor.findOne({name: req.body.name});
        if (!doctor){
            //create new user
            doctor = await Doctor.create(req.body);
            return res.json(200, {
                message: "Account creation successful",
            });
        }else{
            return res.status(422).json( {
                message: "User already exists"
            });
        }
    }catch(err){
        console.log(err);
        return res.status(500).json( {
            message: "Internal server error"
        });
    }
};