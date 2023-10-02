const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    },
    date:{
        type: Date,
    },
    status:{
        type: String,
        required: true,
        enum:{
            values: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
            message: 'Please check the status again'} //value to be one among these
    }
},{
    timestamps:true
});

const Report = mongoose.model('Report', reportSchema);
module.exports=Report;