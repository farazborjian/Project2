var express = require('express');
var router = express.Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function (req, res, next) {
	// Where do you want to go for the root route
	res.render('./');
});

// Google OAuth login route
router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
router.get(
	'/oauth2callback',
	passport.authenticate('google', {
		successRedirect: '/', // where do you want the client to go after you login
		failureRedirect: '/', // where do you want the client to go if login fails
	})
);

// OAuth logout route
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;
