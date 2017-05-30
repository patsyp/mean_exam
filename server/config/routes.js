var Users = require('../controllers/users')
var Answers = require('../controllers/answers')
var Questions = require('../controllers/questions')

module.exports = function(app){
	// User Routes
	app.get('/users', function(req, res) {
	  Users.index(req, res);
	})
	app.get('/users/:id', function(req, res) {
	  Users.show(req, res);
	})
	app.post('/users', function(req, res) {
	  Users.create(req, res);
	})
	app.put('/users/:id', function(req, res) {
	  Users.update(req, res);
	})
	app.post('/sessions', function(req, res){
		Users.login(req, res)
	})
	//Questions
	app.get('/questions', function(req, res){
		Questions.index(req, res)
	})
	app.post('/questions', function(req, res){
		console.log('made it to routes')
		Questions.create(req, res)
	})
	app.get('/questions/:id', function(req, res){
		Questions.show(req, res)
	})
	//Answers
	app.get('/answers', function(req, res){
		Answers.index(req, res)
	})
	app.post('/answers', function(req, res){
		Answers.create(req, res)
	})
	app.get('/answers/:id', function(req, res){
		Answers.show(req, res)
	})
	app.put('/answers/:id/likes', function(req, res){
		console.log('made it to routes')
		Answers.updateLikes(req, res)
	})
}