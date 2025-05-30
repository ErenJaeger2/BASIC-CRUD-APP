"use strict";
const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../Controllers/itemController");

// CRUD ROUTES
router.get("/", getAllItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
