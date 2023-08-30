const express = require("express");
const router = express.Router();

router.post("/insert-worklist", function (req, res, next) {
  res.status(200).json({ Id: 45567, Success: true });
});

module.exports = router;
