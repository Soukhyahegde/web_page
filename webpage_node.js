var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    fs.readFile('soukhya_web.html',web = function(err,data){
        if(err){
            res.writeHead(404,{'content-Type': 'text/html'});
            res.end("404 Not found");
        }
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
    fs.readFile('soukhya_web_css.css',web = function(err,data){
        if(err){
            res.writeHead(404,{'content-Type': 'text/css'});
            res.end("404 Not found");
        }
        res.writeHead(200,{'content-Type':'text/css'});
        res.write(data);
        return res.end();
    });
}).listen(8085);