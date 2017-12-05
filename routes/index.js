const express = require('express');
const router = express.Router();
const { selectDummy } = require("../db");


/* GET home page. */
router.get('/', function(req, res, next) {
  (async () => {
    const r = await selectDummy();
    res.json({
      title: "Express Sample",
      body: r
    });
  })().catch(next);
});

module.exports = router;
