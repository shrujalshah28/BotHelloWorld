var restify = require('restify');
var builder = require('botbuilder');
var dotenv = require('dotenv').load();

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url); 
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('api/messages', connector.listen());

bot.dialog('/', function(session) {
    session.send('Hello World');
});