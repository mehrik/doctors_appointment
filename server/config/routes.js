var bodyParser = require('body-parser');
var user = require('../controllers/users.js');
var appointment = require('../controllers/appointments.js');

module.exports = function(app) {
    app.use(bodyParser.json());

    app.get('/user/index', user.index);
    app.get('/appointment/index', appointment.index);

    app.post('/user/create', user.create);
    app.post('/appointment/create', appointment.create);

    app.get('/user/show', user.show);
    app.get('/appointment/show', appointment.show);

    app.post('/user/delete', user.delete);
    app.post('/appointment/delete', appointment.delete);

    app.post('/user/update', user.update);
    app.post('/appointment/update', appointment.update);

}