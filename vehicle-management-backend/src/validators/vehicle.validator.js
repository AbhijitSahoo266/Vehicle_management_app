const { body, param } = require("express-validator");

exports.createVehicle = [
  body("registrationNumber").notEmpty().withMessage("Registration number required"),
  body("name").notEmpty().withMessage("Vehicle name required"),
];

exports.updateVehicle = [
  param("id").isInt(),
  body("emiAmount").optional().isDecimal(),
  body("vehicleTax").optional().isDecimal(),
];
