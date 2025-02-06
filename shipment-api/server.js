const express = require("express");
const connectDB = require("./src/config/db");
require("dotenv").config();

const shipmentRoutes = require("./src/routes/shipment.routes");

const app = express();
app.use(express.json());

connectDB();

app.use("/shipments", shipmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
