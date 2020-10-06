var express = require("express");
var router = express.Router();
var routeNames = require("../controller/agency");

router.all("/nasa", routeNames.nasa);
router.all("/esa", routeNames.esa);
router.all("/isro", routeNames.isro);
router.all("/ros", routeNames.roscosmos);

module.exports = router;
