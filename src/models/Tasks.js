const { model, Schema } = require("mongoose");
const taskSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  completed: Boolean,
  date: Date,
  responsable: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  comments: [
    {
      author: { type: Schema.Types.ObjectId, ref: 'User' },
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = model("Task", taskSchema);
