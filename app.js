var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

app.use(function(req,res){
    var string = req.originalUrl.split('');
    string.shift();
    string = decodeURIComponent(string.join(''));
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ];
    var obj = {'unix': null , 'natural': null};
    var natural;
    if(isNaN(string)){
    natural = new Date(string);
    }
    else{
    natural = new Date(string*1000)
    }
    var natDate = months[natural.getMonth()]+" "+natural.getDate()+", "+natural.getFullYear();
    obj.unix = natural.getTime()/1000;
    if(months[natural.getMonth()] !== undefined){
      obj.natural = natDate;
    }

    res.send(obj);
} );

app.listen(port);