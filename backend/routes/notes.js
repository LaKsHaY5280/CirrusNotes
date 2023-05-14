const express = require("express");
const router = express.Router();

const tempObj = {
  name: "a",
  age: 1,
};
router.get("/", (req, res) => {
  res.json(tempObj);
});

module.exports = router;
