const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const validate = require("../validators/common.validator");
const v = require("../validators/vehicle.validator");
const c = require("../controllers/vehicle.controller");

router.post("/", auth, v.createVehicle, validate, c.create);
router.get("/", auth, c.getAll);
router.get("/:id", auth, c.getById);
router.put("/:id", auth, v.updateVehicle, validate, c.update);
router.delete("/:id", auth, c.remove);

module.exports = router;
