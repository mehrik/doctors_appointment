var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports =  (function() {
    return {
        index: function(req, res) {
            Appointment.find({})
            .populate('_user')
            .exec(function (err, appointments) {
                if (err) { res.json({error: err}) }
                else { res.json({success: appointments}) }
            });
        },
        create: function(req, res) {
            var appointment = new Appointment({
                date: req.body.date,
                time: req.body.time,
                complaint: req.body.complaint,
                _user: req.body.userID
            });
            appointment.save(function(err, appointment) {
                if (err) {
                    res.json({ error: err });
                } else {
                    res.json({ success: appointment })
                }
            });
        },
        show: function(req, res) {
            res.json('appointments.show');
        },
        delete: function(req, res) {
            res.json('appointments.delete');
        },
        update: function(req, res) {
            res.json('appointments.update');
        }
    }
})();
