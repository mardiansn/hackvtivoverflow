const mongoose = require('mongoose')
const { Schema, model } = mongoose

const answerSchema = new Schema({
  description : {type: String, required: true},
  upVotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  downVotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  questionId: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true, versionKey: false })

const Answer = model('Answer', answerSchema)

module.exports = Answer