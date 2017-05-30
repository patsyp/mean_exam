var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

var UserSchema = new mongoose.Schema({
	name: {type: String, required:[true, 'You must provide a name.']},
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
	answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true})

UserSchema.pre('remove', function(callback){
	var self = this
	Question.remove({user: self._id}, function(){
		// callback()
	}).then(function(){
		Answer.remove({user: self._id}, function(){
			callback()
		})
	})
})

mongoose.model('User', UserSchema)