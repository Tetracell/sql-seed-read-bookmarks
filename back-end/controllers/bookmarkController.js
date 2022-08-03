const e = require("cors");
const express = require("express");
const bookmarks = express.Router();
const { getAllBookmarks } = require("../queries/bookmarks");

//Index
bookmarks.get("/", async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  if (allBookmarks[0]) {
    res.status(200).json(allBookmarks);
  } else {
    res.status(500).json({ error: "server error" });
  }
  res.json(allBookmarks);
});

module.exports = bookmarks;
