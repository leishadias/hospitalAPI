const Patients = require('../models/patients');
const Reports = require('../models/reports');

//register a patient
module.exports.register = async function(req, res){
    try{
        //check if account already exists
        let patient = await Patients.findOne({number: req.body.number});
        if (!patient){
            //create new user
            patient = await Patients.create(req.body);
            return res.json(200, {
                message: "Patient profile creation successful",
            });
        }else{
            //if existing patient then return the profile
            return res.status(200).json( {
                patient: patient
            });
        }
    }catch(err){
        console.log(err);
        return res.status(500).json( {
            message: "Internal server error"
        });
    }
};

//create new test report
module.exports.create_report = async function(req, res) {
    try {
        if (!['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'].includes(req.body.status)){
            //wrong status
            return res.status(422).json({
                message: "Status entered is wrong",
            });
        }
        let patient = await Patients.findOne({_id: req.params.id});
        if (!patient){
            //no patient found
            return res.status(422).json({
                message: "No such patient exists",
            });
        }else{
            const report =  await Reports.create({
                patient: req.params.id,
                createdBy: req.body.createdBy,
                date: new Date(),
                status: req.body.status
            });
            patient.reports.push(report);
            patient.save();
            return res.status(200).json( {
                message: "Report created"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json( {
            message: "Internal server error"
        });
    }
}

//show all reports of a patient
module.exports.all_reports = async function(req, res) {
    try {
        let patient = await Patients.findOne({_id: req.params.id});
        if (!patient){
            return res.status(422).json( {
                message: "No such patient exists",
            });
        }else{
            const report =  await Reports.find({patient: req.params.id})
            .sort('date')
            .populate('patient')
            .populate('createdBy', 'name');
            return res.status(200).json( {
                reports: report
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json( {
            message: "Internal server error"
        });
    }
}