const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){

var today = new Date();

if (today.getDay() === 2 || today.getDay() === 0 ){

  res.send("yay it's a weekend");
} else {
  res.send("Boo! i have to work");
}


})





app.listen(3000, function(req, res){
  console.log("server is running on port 3000");
})
