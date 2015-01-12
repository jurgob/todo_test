var React = require('react');
var express = require('express');
var path = require('path');
require('node-jsx').install();
var app = express();

app.get('/', function(req, res){
    var pageName = req.query['page'];
    var page =  require(path.resolve('js/'+pageName));
    res.send(React.renderToString(page()));
});

app.listen(3000);
