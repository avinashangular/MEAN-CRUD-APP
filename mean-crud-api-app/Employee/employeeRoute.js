const express = require("express");
const router = express.Router();
const employeeModel = require("./employeeModel");

router.post("/create", (req, res, next) => {
  const newEmployee = employeeModel({
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    phone: req.body.phone,
  });
  newEmployee.save((err, result) => {
    if (err) res.status(500).json({ msg: "Error" });
    res.status(200).json({ msg: result });
  });
});

router.get("/read", (req, res, next) => {
  employeeModel.find({}, (err, result) => {
    if (err) res.status(200).json({ error: err });
    res.status(200).json({ data: result });
  });
});

router.put("/update/:id", (req, res, next) => {    
   employeeModel.findById(req.params.id, (err, empModel)=>{
    empModel.name = req.body.name;
    empModel.age = req.body.age;
    empModel.phone = req.body.phone;
    empModel.address = req.body.address;
    empModel.save((err, resp) => {
      if (err) res.status(500).json({ error: err });
      res.status(200).json({ data: resp });
    });
  });  
});

router.delete("/delete/:id", (req, res, next)=>{
    employeeModel.deleteOne({_id:req.params.id},(err, resp)=>{
        if(err) res.status(500).json({"error":err});
        res.status(200).json({msg: resp});
    });
});

module.exports = router;
