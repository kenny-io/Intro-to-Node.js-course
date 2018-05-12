var User = require("../models/users.js");

// Inserts a user to the db
exports.create = function(req, res){
    console.log('test')
    var user = new User.UserModel({
        username: req.body.username,
        age: req.body.age
    }).save(function (err, user){
        console.log('hh')
        if(err)
            res.status(500).send(err.message);
            console.log(user)
            res.json(user)
    });
};
// Finds a single book in the db
exports.readOne = function (req, res) {
    if(req.params.id == undefined)
    return res.status(400).send({});

    User.UserModel.findOne({_id: req.params.id}, function(err, user){
        if(err)
        return res.status(500).send(err.message);
        res.json(user)
    }
);

};
//Finds all books in the db
exports.readAll = function (req, res) {
    console.log('printing available users')
    User.UserModel.findOne({_id: req.params.id}, function(err, users){
        if(err)
        return res.status(500).send(err.message);
        res.json(users)
    }
);
};
// Updates a book from the db
exports.update = function(req, res) {
    if(req.params.id == undefined)
    return res.status(400).send({});

    User.UserModel.findById(req.params.id, function(err, user){
        if(err)
        return res.status(500).send(err.message);

        if(req.body.username != undefined)
        user.username = req.body.username;
        if(req.body.age != undefined)
        user.age = req.body.age;

        user.save(function(err){
            if(err)
            return res.status(500).send(err.message)
            else
            returnres.json(user)
        });
    }
);
};
// Deletes a book from the db
exports.delete = function(req, res) {
    if(req.params.id == undefined)
    return res.status(400).send({});
    User.UserModel.findById(req.params.id, function(err, user){
        if(err)
        return res.status(500).send(err.message);
        user.remove(function(err){
            if(err)
            return res.send(500, err.message);
            res.status(200).send({});
        })
    }
);

};

