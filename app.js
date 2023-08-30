const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const ebsRouter = require("./routes/ebs");
const tiaRouter = require("./routes/tia");
const employeeRouter = require("./routes/employee");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/ebs", ebsRouter);
app.use("/tia", tiaRouter);
app.use("/employee", employeeRouter);

module.exports = app;
