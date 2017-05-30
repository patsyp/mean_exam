var mongoose = require('mongoose')

var AnswerSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
	answer: {type: String, required: [true, 'Answer field cannot be blank.'], minlength: [5, 'Answer must be at least 5 characters long']},
	description: {type: String},
	likes: {
		count: {type: Number, default: 0},
		users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
	}
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema)