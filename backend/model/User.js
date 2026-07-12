const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Fallback logic taaki object milne par bhi asli function extract ho jaye
let passportLocalMongoose = require('passport-local-mongoose');
if (passportLocalMongoose && passportLocalMongoose.default) {
    passportLocalMongoose = passportLocalMongoose.default;
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// Ab yahan pakka function hi pass hoga
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);