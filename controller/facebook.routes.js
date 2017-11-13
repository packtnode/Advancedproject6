// localhost:3000/auth/facebook/<Route>

const Router = require('express').Router(),
	passport = require('passport');


Router.get('/', passport.authenticate('facebook',{
	scope: ['public_profile']
}));


Router.get('/redirect',passport.authenticate('facebook'),(req,res) => {
	//res.redirect('/homepage/'+req.user.id);
	res.send('logged in');
})

module.exports = Router;
