const {Schema, model} = require('mongoose');
const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        required: true
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})
const Team = model('Team', teamSchema);
module.exports = Team