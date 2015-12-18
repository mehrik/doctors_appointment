var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    time: {type: Date, required: true},
    created_at: {type: Date, default: Date.now},
    complaint: {type: String, required: true, minlength: 2},
    _user: {type: Schema.ObjectId, required: true, ref: 'User'}

});

var Appointment = mongoose.model('Appointment', AppointmentSchema);