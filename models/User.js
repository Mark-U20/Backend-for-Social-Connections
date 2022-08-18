const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    //array of thought objects
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    //array of friend objects
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
});


userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});



const User = model('User', userSchema);

module.exports = User;

