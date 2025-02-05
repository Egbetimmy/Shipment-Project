const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    trackingNumber: { type: String, required: true, unique: true },
    pickupAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
    },
    weight: { type: Number, required: true },
    distance: { type: Number, required: true }, 
    cargoType: { type: String, required: true }, 
    cost: { type: Number, required: true }, 
    status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
    location: { type: String, required: true },
}, { timestamps: true });

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
