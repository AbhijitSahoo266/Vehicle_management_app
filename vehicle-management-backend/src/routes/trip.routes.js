const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const validate = require("../validators/common.validator");

const c = require("../controllers/trip.controller");

router.post("/",auth,  c.create);
router.get("/",auth ,  c.getAll);
router.get("/:id",auth ,  c.getById);
router.put("/:id",auth,  c.update);
router.delete("/:id",auth ,  c.remove);

module.exports = router;
