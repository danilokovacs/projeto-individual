var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/likes/", function (req, res) {
    medidaController.buscarLikes(req,res);
});

router.get("/verificarlikes/", function (req, res) {
    medidaController.verificarLikes(req,res);
});

module.exports = router;