const Pricing = require("../models/pricing.model");

const calculateShipmentCost = async ({ weight, distance, cargoType }) => {
    try {
        const pricingRule = await Pricing.findOne({
            "weightRange.min": { $lte: weight },
            "weightRange.max": { $gte: weight },
            "distanceRange.min": { $lte: distance },
            "distanceRange.max": { $gte: distance },
            cargoType: cargoType
        });

        if (!pricingRule) return { totalCost: null };

        const cost = pricingRule.basePrice + (pricingRule.pricePerKg * weight) + (pricingRule.pricePerKm * distance);
        return { totalCost: cost };
    } catch (error) {
        throw new Error(`Pricing calculation failed: ${error.message}`);
    }
};

module.exports = { calculateShipmentCost };
