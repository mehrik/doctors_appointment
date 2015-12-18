myApp.factory('AppointmentFactory', function($http) {
    var factory = {};
    var appointments = [];
    var today = Date();

    factory.index = function(callback) {
        $http.get('/appointment/index').success(function (output) {
            if (output.error) {
                console.log('You have a fucking error', output.error);
            } else {
                console.log('the topics list', output.success);
                appointments = output.success;
                callback(appointments);
            }
        })
    }
    factory.create = function(info, callback) {
        console.log('from appointmentFactory.create', info);
        $http.post('/appointment/create', info).success(function (output) {
            callback(output);
        });
    }

    return factory;
});