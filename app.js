//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("home");

});
app.get("/about",function(req,res){
res.render("about");
});
app.get("/explore",function(req,res){
  res.render("explore");
  });
  app.get("/career",function(req,res){

    res.render("career");
    });
app.get("/blog",function(req,res){

      res.render("blog");
      });
app.get("/loginPage",function(req,res){
   res.render("loginPage");
   });
      
app.get("/home",function(req,res){

res.render("home");
 });
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//======ROUTING PARAMETER======

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


