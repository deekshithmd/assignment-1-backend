const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  company: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  lastUpdated: {
    required: true,
    type: String,
  },
  notes: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Team", teamSchema);
