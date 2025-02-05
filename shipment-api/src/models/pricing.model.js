const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
    cargoType: { type: String, required: true },
    weightRange: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    distanceRange: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    basePrice: { type: Number, required: true },
    pricePerKg: { type: Number, required: true },
    pricePerKm: { type: Number, required: true }
}, { timestamps: true });

pricingSchema.index({ "weightRange.min": 1, "weightRange.max": 1, "distanceRange.min": 1, "distanceRange.max": 1, cargoType: 1 });

const Pricing = mongoose.model("Pricing", pricingSchema);

module.exports = Pricing;
