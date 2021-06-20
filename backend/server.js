const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/addStudent", require("./Routes/api/addStudent"));
app.use("/getallstudent", require("./Routes/api/GetAllStudents"));
app.use("/deletestudent", require("./Routes/api/DeletStudent"));
app.use("/editstudent", require("./Routes/api/EditStudent"));
app.use("/studentLogin", require("./Routes/api/StudentLogin"))

// app.use('api/SignUp', require('./Routes/api/SignUp'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
