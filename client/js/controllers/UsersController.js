myApp.controller('UsersController', function($location, UserFactory) {
    var _this = this;

    this.create = function () {
        UserFactory.create(_this.user);
        $location.path('/appointments');
    }

});