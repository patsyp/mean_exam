var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')

var QuestionSchema = new mongoose.Schema({
	user: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer'
	}],
	question: {
		type: String, 
		required: [true, 'Question field cannot be blank.'],
		minlength: [10, 'Question must be at least 10 characters long.']},
	description: {type: String}
}, {timestamps: true})

QuestionSchema.pre('remove', function(callback){
	Answer.remove({message: this._id}, callback)
})

mongoose.model('Question', QuestionSchema)