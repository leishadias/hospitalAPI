const express=require('express');
const router = express.Router();
const reportController = require('../controllers/reports_controller');
const passport = require('passport');

//authorisaion of the doctor reqd for checking the records
router.get('/:status',passport.authenticate('jwt',{session:false}), reportController.getReports);

module.exports = router;