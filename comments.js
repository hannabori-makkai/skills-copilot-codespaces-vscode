//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    if (pathName === '/') {
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.end(data);
            }
        });
    } else if (pathName === '/load') {
        var jsonStr = JSON.stringify(comments);
        res.end(jsonStr);
    } else if (pathName === '/add') {
        var str = '';
        req.on('data', function(chunk) {
            str += chunk;
        });
        req.on('end', function() {
            var obj = querystring.parse(str);
            comments.push(obj);
            res.end('success');
        });
    } else {
        fs.readFile('.' + pathName, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.end(data);
            }
        });
    }
});
server.listen(3000, function() {
    console.log('server is listening at port 3000');
});