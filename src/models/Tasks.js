const {model, Schema} = require("mongoose");
const taskSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean,
    date : Date,
    responsable:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = model("Task", taskSchema);