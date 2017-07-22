//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/search-engine-marketing', function(req, res){
  res.sendFile(path.join(__dirname, 'views/sem.html'));
});
app.get('/on-page-off-page-techniques', function(req, res){
  res.sendFile(path.join(__dirname, 'views/on-off-page.html'));
});
app.get('/mobile-responsive-tools', function(req, res){
  res.sendFile(path.join(__dirname, 'views/mobile.html'));
});
app.get('/use-of-tags-and-backlinking', function(req, res){
  res.sendFile(path.join(__dirname, 'views/tags.html'));
});


//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});