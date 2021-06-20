const express = require("express");
const router = express.Router();
const AddStudent = require("../../model/AddStudent");

router.get("/", async (req, res) => {
  AddStudent.findById(req.query.id, function (err, data) {
    res.json(data);
  });
});

router.post("/", async (req, res) => {
  const { params } = req.body;
  const { data, id } = params;
  console.log(data);
  AddStudent.findByIdAndUpdate(
    { _id: id },
    {
      name: data.FirstName,
      last_name: data.LastName,
      email: data.Email,
      password: data.Password,
    },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
