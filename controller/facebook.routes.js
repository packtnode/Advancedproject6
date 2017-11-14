// localhost:3000/auth/facebook/<Route>

const Router = require('express').Router(),
	passport = require('passport');
require('./facebook.setup');

Router.get('/', passport.authenticate('facebook',{
	scope: ['public_profile']
}));


Router.get('/redirect',passport.authenticate('facebook'),(req,res) => {
	//res.redirect('/homepage/'+req.user.id);
	console.log(req.user);
	res.send('logged in to the account of' + req.user.username);
})

module.exports = Router;
