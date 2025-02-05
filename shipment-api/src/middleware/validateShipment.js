const { body, validationResult } = require("express-validator");

// Validate shipment data before saving
const validateShipment = [
    body("trackingNumber").isString().notEmpty().withMessage("Tracking number is required"),
    body("pickupAddress").isString().notEmpty().withMessage("Pickup address is required"),
    body("deliveryAddress").isString().notEmpty().withMessage("Delivery address is required"),
    body("dimensions.length").isFloat({ gt: 0 }).withMessage("Length must be a positive number"),
    body("dimensions.width").isFloat({ gt: 0 }).withMessage("Width must be a positive number"),
    body("dimensions.height").isFloat({ gt: 0 }).withMessage("Height must be a positive number"),
    body("weight").isFloat({ gt: 0 }).withMessage("Weight must be a positive number"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = validateShipment;
