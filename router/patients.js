const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patients_controller');
const passport = require('passport');

//authorisaion of the doctor reqd for every activity in the patient's records
router.post('/register', passport.authenticate('jwt',{session:false}), patientController.register);
router.post('/:id/create_report', passport.authenticate('jwt',{session:false}), patientController.create_report);
router.get('/:id/all_reports', passport.authenticate('jwt',{session:false}), patientController.all_reports);

module.exports = router;