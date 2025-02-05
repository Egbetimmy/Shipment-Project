require("dotenv").config();
const mongoose = require("mongoose");
const insertPricingData = require("/workspace/Shipment-Project/shipment-api/src/data/insertPricingData.js");  // Import the insert function

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected Successfully!");

        insertPricingData();
    } catch (error) {
        console.error("MongoDB Connection Failed!", error);
        process.exit(1);  
    }
};

module.exports = connectDB;
