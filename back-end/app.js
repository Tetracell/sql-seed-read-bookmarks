//Dependencies
const cors = require("cors");
const express = require("express");

//Configuration
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

const bookmarksController = require("./controllers/bookmarkController");
app.use("/bookmarks", bookmarksController);

//404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;
