var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/likes/", function (req, res) {
    medidaController.buscarLikes(req,res);
});

module.exports = router;