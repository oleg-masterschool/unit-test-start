const Vehicle = require("./vehicle");

describe('Vehicle class', function () {
    it('should exist', function () {
        expect(Vehicle).toBeDefined();
    });
});

describe('TDD', function () {
    it('should have a color property', function () {
        const car = new Vehicle();
        // assert that car has a "color" property of "white"
        expect(car).toHaveProperty('color', 'white');
    });
});