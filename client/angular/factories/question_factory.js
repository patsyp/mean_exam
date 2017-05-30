app.factory('QuestionFactory', function($http){
	var factory ={}

	factory.create = function(newQuestion, callback){
		$http.post('/questions', newQuestion).then(callback)
	}
	factory.index = function(callback){
		$http.get('/questions').then(callback)
	}
	factory.destroy = function(id, callback){
		$http.delete('/questions/' + id).then(callback)
	}
	factory.updateLikes = function(answer_id, user_id, callback){
		console.log(user_id)
		$http.put('/answers/' + answer_id + '/likes', {user: user_id}).then(callback)
	}
	factory.show = function(id, callback){
		$http.get('/questions/' + id).then(callback)
	}
	return factory
})