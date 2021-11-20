var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    //res.send("API is working properly");
    res.json({
        data: [
            {
              name: 'Apple Watch Series 6',
              brand: 'Apple',
              price: 529
            },
            {
              name: 'Apple Watch SE',
              brand: 'Apple',
              price: 369
            },
            {
              name: 'Apple Watch Series 3',
              brand: 'Apple',
              price: 259
            }
          ]
    });
});

module.exports = router;




