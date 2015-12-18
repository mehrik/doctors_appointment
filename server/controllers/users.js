var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports =  (function() {
    return {
        index: function(req, res) {
            res.json('users.index');
        },
        create: function(req, res) {
            User.findOne({name: req.body.name}, function(err, user) {
                // console.log('here is an error', err);
                // console.log('here is a user', user);
                if (err) { 
                    // console.log('Here is an error');
                    res.json({error: err}); 
                }
                else if (user) { 
                    // console.log('sending back existing user', user);
                    res.json({success: user}) 
                }
                else {
                    // console.log('making new user');
                    var new_user = new User({
                        name: req.body.name,
                        password: req.body.password,
                    });
                    new_user.save(function (err, createdUser) {
                        if (err) {
                            res.json({error: err});
                        } else {
                            console.log(createdUser);
                            res.json({success: createdUser});
                        }
                    });
                }
            });
        },
        show: function(req, res) {
            res.json('users.show');
        },
        delete: function(req, res) {
            res.json('users.delete');
        },
        update: function(req, res) {
            console.log(req.body._user);
            console.log(req.body);
            User.findOne({_id: req.body._user}, function(err, user) {
                if (err) {
                    console.log(err);
                    res.json({error: err});
                } else {
                    // user.appointments.push(req.body._id);
                    console.log(user);
                    res.json({success: user});
                }
            });
        }
    }
})();
