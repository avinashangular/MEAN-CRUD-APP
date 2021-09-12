require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const employeeRoute = require("./Employee/employeeRoute");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL+"mylib").then(
  () => {console.log("Connection Successful.")},
  (err) => {
    console.log(err);
  }
);



app.use("/api/employee", cors(), employeeRoute);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Example is runnig on at http://localhost:${port}`);
});
