var path = require("path"); // add requir for path module to return file
var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

//for server to correctly return the css/site.css" file, the "static" middleware is used
app.use(express.static('public'));

// setup a 'route' to listen on the default url path (http://localhost) to return index.html file
app.get("/", function(req,res){ 
   res.sendFile(path.join(__dirname,"/views/index.html"));
});


// setup another route to listen on /about to return aboutMe.html file
app.get("/about", function(req,res){
   res.sendFile(path.join(__dirname,"/views/aboutMe.html"));
 });

 // setup another route to listen on /about to return portfolio.html file
app.get("/portfolio", function(req,res){
    res.sendFile(path.join(__dirname,"/views/portfolio.html"));
  });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);



