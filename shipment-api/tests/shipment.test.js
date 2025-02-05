const request = require("supertest");
const app = require("../server"); // Import Express app
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe("Shipment API Tests", () => {
    test("POST /api/shipment/calculate should return the correct shipping cost", async () => {
        const res = await request(app)
            .post("/api/shipment/calculate")
            .send({ weight: 10, distance: 50, cargoType: "Standard" });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("totalCost");
        expect(typeof res.body.totalCost).toBe("number");
    });

    test("POST /api/shipment/calculate should return 400 for missing fields", async () => {
        const res = await request(app).post("/api/shipment/calculate").send({ weight: 10 });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("error");
    });
});
