var express = require("express");
var router = express.Router();
var routeNames = require("../controller/planet");

router.all("/mars", routeNames.mars);
router.all("/moon", routeNames.moon);
router.all("/jupiter", routeNames.jupiter);
router.all("/saturn", routeNames.saturn);

module.exports = router;
