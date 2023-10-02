const Reports = require('../models/reports');

//fetch all reports of a particular status
module.exports.getReports = async function(req, res){
    try {
        let report = await Reports.find({status: req.params.status})
        .sort('date')
        .populate('patient')
        .populate('createdBy', 'name');
        return res.status(200).json( {
            reports: report
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json( {
            message: "Internal server error"
        });
    }
}