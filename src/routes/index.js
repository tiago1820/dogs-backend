const { Router } = require("express");
const router = Router();

const apiRoute = require("./api.route");
const temperamentRoute = require("./temperament.route");
const dogRoute = require("./dog.route");

router.use(apiRoute);
router.use(temperamentRoute);
router.use(dogRoute);

module.exports = router;