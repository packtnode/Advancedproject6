const express = require('express'),
	app = express(),
	passport = require('passport'),
	facebookRoutes = require('./controller/facebook.routes');


app.use('/auth/facebook/',facebookRoutes); //localhost:3000/auth/facebook/<Route>


app.listen(3000,()=>{
	console.log('listening on http://localhost:3000/');
})