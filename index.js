require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes=require('./routes/routes')

const app = express();
app.use(cors());

const db_url = process.env.MONGODB_URL;

mongoose.connect(db_url);

const database = mongoose.connection;

database.on("error", () => {
  console.log("Error in connection");
});

database.on("connected", () => {
  console.log("Database connected");
});

app.use(express.json())
app.use('/api',routes)

app.listen(5000, () => {
  console.log("Server started");
});
