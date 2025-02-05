// insertPricingData.js
const Pricing = require("../models/pricing.model");

const insertPricingData = async () => {
    const pricingData = [
        {
            cargoType: "fragile",
            weightRange: { min: 0, max: 5 },
            distanceRange: { min: 0, max: 50 },
            basePrice: 20,
            pricePerKg: 5,
            pricePerKm: 2
        },
        {
            cargoType: "electronics",
            weightRange: { min: 0, max: 10 },
            distanceRange: { min: 50, max: 200 },
            basePrice: 30,
            pricePerKg: 7,
            pricePerKm: 3
        }
    ];

    try {
        await Pricing.insertMany(pricingData);
        console.log("Pricing data inserted successfully!");
    } catch (err) {
        console.error("Error inserting pricing data:", err);
    }
};

module.exports = insertPricingData;
