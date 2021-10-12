const Vehicle = require("./vehicle");

describe('Vehicle class', function () {
    it('should exist', function () {
        expect(Vehicle).toBeDefined();
    });
});

describe('TDD', function () {
    let car;

    beforeEach(function () {
        car = new Vehicle('white');
    });

    it('should have a color property', function () {
        expect(car).toHaveProperty('color', 'white');
    });

    it('should have a drive method', function () {
        expect(car.drive).toBeDefined();
        expect(car.drive).toBeInstanceOf(Function);
        expect(car.drive).toBe(Vehicle.prototype.drive);
    });

    it('should have distanceDriven property', function () {
        expect(car).toHaveProperty('distanceDriven', 0);
    });

    describe('when driving', function () {
        it('should increase the distance covered', function () {
            car.drive(10);
            expect(car.distanceDriven).toBe(10);
            car.drive(30);
            expect(car.distanceDriven).toBe(40);
        });
    });
});