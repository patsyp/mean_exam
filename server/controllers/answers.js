var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')
var User = mongoose.model('User')
var Question = mongoose.model('Question')

module.exports = {
	index: function (req, res){
		Answer.find({}, function(err, answers){
			if (err){
				return res.json(err)
			}
			return res.json(answers)
		})
	},
	create: function(req, res){
		Answer.create(req.body, function(err, answer){
			if(err){
				return res.json(err)
			}
			Question.findByIdAndUpdate(req.body.question, {$push: {answers:answer._id}}, function(err, question){
				if(err){
					return res.json(err)
				}
				User.findByIdAndUpdate(req.body.user, {$push: {answers:answer._id}}, function(err, user){
					if (err){
						return res.json(err)
					}
					return res.json(answer)
				})
			})
		})
	},
	show: function(req, res){
		Answer.findById(req.params.id, function(err, answer){
			if(err){
				return res.json(err)
			}
			return res.json(answer)
		})
	},
	updateLikes: function(req, res){
		console.log('user:' + req.body.user)
		Answer.findByIdAndUpdate(req.params.id, {$inc: {'likes.count': 1}, $push: {'likes.users':req.body.user}}, {new:true}, function(err, message){
			if (err){
				return res.json(err)
			}
			console.log('data is out')
			return res.json(message)
		})
	}
}