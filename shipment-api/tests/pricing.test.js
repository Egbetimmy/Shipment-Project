const { calculateShipmentCost } = require("../src/services/shipment.service");

describe("Shipment Pricing Calculation", () => {
    test("should return correct cost for valid inputs", async () => {
        const testData = { weight: 10, distance: 50, cargoType: "Standard" };
        const mockPricing = {
            basePrice: 500,
            pricePerKg: 20,
            pricePerKm: 5
        };

        jest.spyOn(require("../src/models/shipment.model"), "findOne").mockResolvedValue(mockPricing);

        const cost = await calculateShipmentCost(testData);
        expect(cost.totalCost).toBe(500 + (20 * 10) + (5 * 50)); // Expected: 1200
    });

    test("should throw an error if no pricing rule is found", async () => {
        jest.spyOn(require("../src/models/shipment.model"), "findOne").mockResolvedValue(null);

        await expect(calculateShipmentCost({ weight: 5, distance: 20, cargoType: "Fragile" }))
            .rejects.toThrow("No pricing rule found!");
    });
});
