const { Schema, model } = require('mongoose');
const { mongoose } = require('mongoose');
const User = require('./User');


const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});








const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},

{
    toJSON: {
        getters: true,
        virtuals: true
    }
}


);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});





const Thought = model('thought', thoughtSchema);

module.exports = Thought;