myApp.controller('AppointmentsController', function($location, AppointmentFactory, UserFactory) {
    var _this = this;
    _this.appointments = [];
    _this.user;
    _this.allUsers;

    this.index = function() {
        AppointmentFactory.index(function(data) {
            _this.appointments = data;
            _this.today = Date();
            UserFactory.getCurrentUser(function (output) {
                _this.user = output
            });
        });

    }
    this.create = function() {
        _this.newApp.userID = _this.user._id;
        AppointmentFactory.create(_this.newApp, function(output) {
            UserFactory.update(output, function () {
                _this.index();
                _this.newApp = {};
            });
        });
    }
    this.delete = function() {}

    this.redirectNewApp = function() {
        $location.path('/new_appointment');
    }

    this.redirectMain = function() {
        $location.path('/appointments')
    }

    this.logout = function() {
        UserFactory.logout(function () {
            $location('/');
        })
    }

    this.index();
});