const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creation of Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
