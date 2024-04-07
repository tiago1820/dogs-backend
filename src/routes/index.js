const { Router } = require("express");
const router = Router();

const dogRoute = require("./dog.route");
const temperamentRoute = require("./temperament.route");
router.use(dogRoute);
router.use(temperamentRoute);

module.exports = router;