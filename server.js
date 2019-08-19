var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
  console.log('Server listo');
});