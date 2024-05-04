const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        required: [true, "Please enter your full name"],
        trim: true,
        index: true
    },
    email : {
        type: String,
        required : true,
        trim: true,
        lowercase : true,
        unique: true
    },
    avatar: {
        type: String, // add here cloudnary URL here
        // required: true
    },
    coverImage: {
        type: String, // add here cloudnary URL here
        // required: true
    },
    watchHistry: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    password: {
        type: String,
        required: [true, "Please enter your password"],
        trim: true
    },
    refreshToken: {
        type: String, // main things to refresh this token here
        // required: [true, "Please enter your refresh token"],
        trim: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const salt = 10;
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, salt);
    return next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = () => {
    console.log("token");
    return jwt.sign({ _id: this._id, email: this.email, username : this.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
}

// vary low information here
userSchema.methods.generateRefreshToken = () => {
    return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
}

const User = mongoose.model('User', userSchema);

module.exports = {User};
