const express = require("express");

var router = express.Router();
router.get("/", function (req, res) {
  const list = [
    { CatID: 1, CatName: "Laptop" },
    { CatID: 2, CatName: "Smartphone" },
    { CatID: 3, CatName: "Tablet" },
  ];
  res.render("vwCategories/list", {
    categories: list,
    empty: list.length == 0,
  });
});

router.get("/add", function (req, res) {
  res.render("vwCategories/add");
});

module.exports = router;
