var HomeController = require('./controllers/HomeController');

module.exports = function(app){
    
    app.get('/', HomeController.Index);
    app.get('/home/seriousaction', HomeController.SeriousAction);
    app.get('/home/funnyaction', HomeController.FunnyAction);
    app.get('/other', HomeController.Other);   
    
};
