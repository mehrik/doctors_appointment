myApp.factory('UserFactory', function($http) {
    var factory = {};
    var _this = this;
    var current_user = {};

    factory.create = function (loginInfo, callback) {
        console.log('LoginInfo', loginInfo);
        $http.post('/user/create', loginInfo).success(function(output) {
            current_user = output.success;
        });
    }

    factory.getCurrentUser = function(callback) {
        callback(current_user);
    }

    factory.logout = function (callback) {
        current_user = {};
        callback();
    }

    factory.update = function (info, callback) {
        $http.post('/user/update', info).success(function(output) {
            console.log(output);
            callback();
        })
    }

    // factory.index = function (callback) {
    //     $http.get('/user/index').success(function(output) {
    //         console.log('User Factory Index', output);
    //     });
    // }

    return factory;
});