const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const User = require('./User');









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
    reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }]
},

{
    toJSON: {
        getters: true
    }
}


);


const Thought = model('thought', thoughtSchema);

module.exports = Thought;