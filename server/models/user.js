var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, minlength: 2},
    appointments: [{type: Schema.ObjectId, ref: 'Appointment'}]
});

var User = mongoose.model('User', UserSchema);