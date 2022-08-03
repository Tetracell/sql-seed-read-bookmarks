const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (error) {
    return error;
  }
};

//Note: with module.exports we are returning an object, because we are going
//to return more than one function, therefore, we will store it in an object.
module.exports = { getAllBookmarks };
