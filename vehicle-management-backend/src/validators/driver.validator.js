const { body, param } = require("express-validator");

exports.createDriver = [
  body("name").notEmpty().withMessage("Driver name is required"),
  body("phoneNumber").notEmpty().isNumeric().withMessage("Valid phone number required"),
  body("licenseNumber").notEmpty().withMessage("License number required"),
];

exports.updateDriver = [
  param("id").isInt().withMessage("Invalid driver id"),
  body("name").optional().notEmpty(),
  body("phoneNumber").optional().isNumeric(),
  body("currentSalary").optional().isDecimal(),
];
