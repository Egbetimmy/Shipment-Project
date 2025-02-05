const Shipment = require("../models/shipment.model");
const { calculateShipmentCost } = require("../utils/pricingCalculator");

const createShipmentService = async (shipmentData) => {
    const { weight, distance, cargoType } = shipmentData;

    const shipmentCost = await calculateShipmentCost({ weight, distance, cargoType });

    shipmentData.cost = shipmentCost.totalCost;

    const shipment = new Shipment(shipmentData);
    return await shipment.save();
};

const getShipmentsService = async () => {
    return await Shipment.find();
};

const getShipmentByTrackingNumberService = async (trackingNumber) => {
    return await Shipment.findOne({ trackingNumber });
};

const updateShipmentService = async (id, updateData) => {
    delete updateData.cost; 
    return await Shipment.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteShipmentService = async (id) => {
    return await Shipment.findByIdAndDelete(id);
};

module.exports = {
    createShipmentService,
    getShipmentsService,
    getShipmentByTrackingNumberService,
    updateShipmentService,
    deleteShipmentService
};
