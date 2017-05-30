app.factory('AnswerFactory', function($http){
	var factory = {}
	factory.create = function(newAnswer, callback){ 
		$http.post('/answers', newAnswer).then(callback)
	}
	factory.destroy = function(id, callback){
		$http.delete('/answers/' + id).then(callback)
	}
	return factory
})