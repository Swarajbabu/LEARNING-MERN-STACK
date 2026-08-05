const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/
    },

    age: {
        type: Number,
        min: 18,
        max: 60
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },

    isActive: {
        type: Boolean,
        default: true
    }
    
});

const User = mongoose.model("User", userSchema);