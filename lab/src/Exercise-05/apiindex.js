
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var UsersController = require("./controllers//UsersController");
var User = require("./models/users");
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;


// App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());


//CRUD Operations
app.post('/users', UsersController.create); // add users
app.get("/users/:id", UsersController.readOne); // Read one user
app.get("/users/", UsersController.readAll); // Read All users
app.put("/users/:id", UsersController.update); // Update user
app.delete("/users/:id", UsersController.delete); // Delete user

//....................................................................


app.get("/apiindex", function(req, res) { 
 res.send("We'll set up our API here !!");
});

app.listen(3030, function(){
 console.log("API server listening on port 3030");
})