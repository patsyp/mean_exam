app.controller('QuestionsController', function(UserFactory, QuestionFactory, AnswerFactory, $location, $routeParams){
	console.log('QuestionsController connected!')
	var self = this
	self.questions = [];
	self.new_question_errors = []
	self.newQuestion = {}
	self.newAnswer = {}
	self.answer_errors =[]
	self.question = {}

	self.create = function(newQuestion){
		UserFactory.session(function(user){
			newQuestion.user = user._id
			QuestionFactory.create(newQuestion, function(res){
			if (res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.new_question_errors.push(error.message)
				}
			} else {
				self.index()
				self.newQuestion = {}
				$location.url('/dashboard')
			}
			})
		})
	}
	self.index = function(){
		QuestionFactory.index(function(res){
			self.questions = res.data
		})
	}
	self.show = function(){
		QuestionFactory.show($routeParams.id, function(res){
			self.question = res.data
		})
	}
	self.destroy = function(id){
		QuestionFactory.destroy(id, self.index)
	}
	self.createAnswer = function(newAnswer, index, question_id){
		self.answer_errors = {}
		if(!newAnswer[index]){
			newAnswer[index] = {}
		}
		newAnswer = newAnswer[index]
		newAnswer.question = question_id
		UserFactory.session(function(user){
			newAnswer.user = user
			AnswerFactory.create(newAnswer, function(res){
				self.newAnswer = {}
				if (res.data.errors){
					self.answer_errors[index] = []
					for (key in res.data.errors){
						var error = res.data.errors[key]
						console.log(error.message)
						self.answer_errors[index].push(error.message)
					}
				} else {
					self.index()
					$location.url('/dashboard')
				}
				
			})
		})	
	},
	self.updateLikes = function(answer_id, user_id){
		console.log(user_id)
		QuestionFactory.updateLikes(answer_id, user_id, function(){
			self.index()
			self.show()
		})
	}	
})