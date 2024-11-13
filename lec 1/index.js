//initial initialization for server
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

//initializing mongo db
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

//connection testing with mongo db
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => console.log("Data base created"));



//Server listning
app.listen(port, () => {
  console.log(`Server listnig at port ${port}`);
});
