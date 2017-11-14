const express = require('express'),
	app = express(),
	passport = require('passport'),
	mongoose = require('mongoose'),
	session  = require('express-session'),
	facebookRoutes = require('./controller/facebook.routes'),
	key = require('./key');

app.use(session({ secret: key.secret }));
app.use(passport.initialize());
app.use(passport.session());


require('./controller/facebook.setup');
mongoose.connect('mongodb://localhost/advancedproject5');

app.get('/',(req,res)=>{
	let html = '<a href="/auth/facebook">Sign In With Facebook</a>';
	res.send(html);
})

app.use('/auth/facebook/',facebookRoutes); //localhost:3000/auth/facebook/<Route>


app.listen(3000,()=>{
	console.log('listening on http://localhost:3000/');
})