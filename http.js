var express = require('express');
var app = new express();
var home = 'https://grou.ps';

app.get('*',function(request, response){
    response.redirect(home + request.url);
})

app.listen(80);
console.log(`\nRedirecting to https at localhost:80\n`);
