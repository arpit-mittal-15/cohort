const { default: mongoose } = require("mongoose");

// mongoose.connect("mongouri");
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
}