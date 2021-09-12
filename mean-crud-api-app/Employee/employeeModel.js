const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  age: { type: Number },
});

const employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;
