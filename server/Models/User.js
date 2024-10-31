const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    googleId: String,
    image: String,
    interests: { // Ensure interests is defined
        type: [String], // Array of strings
        default: [],
    },
}, { timestamps: true });

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
