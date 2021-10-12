class Vehicle {
    constructor(color) {
        this.color = color;
        this.distanceDriven = 0;
    }

    drive(distance) {
        this.distanceDriven += distance;
    }
}

module.exports = Vehicle;
