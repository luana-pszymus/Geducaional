const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/rotadeteste", (req, res) => {
  res.send("rota de teste ok");
});

module.exports = router;
