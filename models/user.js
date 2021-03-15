const mongoose = require('mongoose');

// Create your User Model

const userSchema = new mongoose.Schema({
	username: String,
	fullName: String,
	location: String,
	email: String,
	age: Number,
	gender: String,
	googleId: String,
});

