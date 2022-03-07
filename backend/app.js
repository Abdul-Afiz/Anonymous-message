const config = require("./utils/config");

const express = require("express");
require("express-async-errors");
const app = express();

const mongoose = require("mongoose");

const cors = require("cors");
const userRouter = require("./Routers/userRouter");

const middleWare = require("./utils/middleware");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleWare.logger);

app.use("/api/users", middleWare.tokenExtractor, userRouter);

app.use(middleWare.unknownEndpoint);
app.use(middleWare.errorHandler);

try {
  mongoose.connect(config.mongoUrl);
  console.log("connected to mongodb successfully");
} catch (error) {
  console.log({ error });
}

module.exports = app;
