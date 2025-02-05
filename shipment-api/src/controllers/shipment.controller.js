const mongoose = require("mongoose");
const { 
    createShipmentService, 
    getShipmentByTrackingNumberService, 
    updateShipmentService, 
    deleteShipmentService 
} = require('../services/shipment.service');

const getShipmentByTrackingNumber = async (req, res) => {
    try {
        const { trackingNumber } = req.params;
        
        if (!trackingNumber || trackingNumber.length < 6) { 
            return res.status(400).json({ message: "Invalid tracking number" });
        }

        const shipment = await getShipmentByTrackingNumberService(trackingNumber);
        if (!shipment) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        res.status(200).json(shipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createShipment = async (req, res) => {
    try {
        const shipment = await createShipmentService(req.body);
        res.status(201).json(shipment);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

const updateShipment = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid shipment ID" });
        }

        const updatedShipment = await updateShipmentService(id, req.body);
        if (!updatedShipment) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        res.status(200).json(updatedShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteShipment = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid shipment ID" });
        }

        const deletedShipment = await deleteShipmentService(id);
        if (!deletedShipment) {
            return res.status(404).json({ message: "Shipment not found" });
        }
        res.status(200).json({ message: "Shipment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createShipment,
    getShipmentByTrackingNumber,
    updateShipment,
    deleteShipment
};
