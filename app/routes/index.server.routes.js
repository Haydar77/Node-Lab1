module.exports = function (app) {

    //load the controllers
    var index = require('../controllers/index.server.controller');
    var thankyou = require('../controllers/thankyou.server.controller');
    var feedback = require('../controllers/feedback.server.controller');

    //handle the routing of get and post request
    app.get('/', index.render);
    app.post('/', index.render);
    app.get('/index', index.render);
    app.post('/index', index.render);
    app.get('/thankyou', thankyou.render);
    app.get('/feedback', feedback.render);
    app.post('/feedback', thankyou.render);
};
