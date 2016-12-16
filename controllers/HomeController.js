exports.Index = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = 'Hello World';
    response.pageInfo.content = 'INNER CONTENT FROM CONTROLLER';
    response.render('home/Index', response.pageInfo);
};

exports.SeriousAction = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = 'Home / SeriousAction';
    response.pageInfo.content = 'INNER CONTENT FROM CONTROLLER';
    response.render('home/SeriousAction', response.pageInfo);
};

exports.FunnyAction = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = 'Home / FunnyAction';
    response.pageInfo.content = 'INNER CONTENT FROM CONTROLLER';
    response.render('home/FunnyAction', response.pageInfo);
};

exports.Other = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = 'Other';
    response.render('home/Other', response.pageInfo);
};