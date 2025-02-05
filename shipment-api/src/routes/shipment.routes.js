const express = require("express");
const { createShipment, getShipments, getShipmentByTrackingNumber, updateShipment, deleteShipment } = require("../controllers/shipment.controller");
const validateShipment = require("../middleware/validateShipment");

const router = express.Router();

router.post("/", validateShipment, createShipment);
//router.get("/", getShipments);
router.get("/:trackingNumber", getShipmentByTrackingNumber);
router.put("/:id", validateShipment, updateShipment); 
router.delete("/:id", deleteShipment);

module.exports = router;
