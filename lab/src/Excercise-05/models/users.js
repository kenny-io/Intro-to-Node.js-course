var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({ 
  username: { type: String, required: true },
  age: { type: String, required: true }
});

var User = mongoose.model("User", UserSchema);
module.exports = {
 UserModel: User
};

//module.exports = mongoose.model('Users', UserSchema);