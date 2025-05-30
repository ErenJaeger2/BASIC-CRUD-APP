"use strict";
const express = require("express");
const connectDB = require("./mongoDB/mongodb");
const itemRoutes = require("./Routers/app");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Top level middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/items", itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
