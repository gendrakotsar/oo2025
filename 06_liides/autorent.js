var EconomyCar = /** @class */ (function () {
    function EconomyCar(available) {
        this.available = available;
    }
    EconomyCar.prototype.getCarType = function () {
        return "Economy";
    };
    EconomyCar.prototype.getRentalPrice = function () {
        return 45;
    };
    EconomyCar.prototype.isAvailable = function () {
        return this.available;
    };
    EconomyCar.prototype.rentCar = function () {
        if (this.available) {
            console.log(this.getCarType() + " car is rented.");
            this.available = false;
        }
        else {
            console.log(this.getCarType() + " car isn't available.");
        }
        console.log("-------------------");
    };
    return EconomyCar;
}());
var LuxuryCar = /** @class */ (function () {
    function LuxuryCar(available) {
        this.available = available;
    }
    LuxuryCar.prototype.getCarType = function () {
        return "Luxury";
    };
    LuxuryCar.prototype.getRentalPrice = function () {
        return 120;
    };
    LuxuryCar.prototype.isAvailable = function () {
        return this.available;
    };
    LuxuryCar.prototype.rentCar = function () {
        if (this.available) {
            console.log(this.getCarType() + " car is rented.");
            this.available = false;
        }
        else {
            console.log(this.getCarType() + " car isn't available.");
        }
        console.log("-------------------");
    };
    return LuxuryCar;
}());
var SUV = /** @class */ (function () {
    function SUV(available) {
        this.available = available;
    }
    SUV.prototype.getCarType = function () {
        return "SUV";
    };
    SUV.prototype.getRentalPrice = function () {
        return 70;
    };
    SUV.prototype.isAvailable = function () {
        return this.available;
    };
    SUV.prototype.rentCar = function () {
        if (this.available) {
            console.log(this.getCarType() + " car is rented.");
            this.available = false;
        }
        else {
            console.log(this.getCarType() + " car isn't available.");
        }
        console.log("-------------------");
    };
    return SUV;
}());
var CarRentalSystem = /** @class */ (function () {
    function CarRentalSystem() {
        this.cars = [];
    }
    CarRentalSystem.prototype.addCar = function (car) {
        this.cars.push(car);
    };
    CarRentalSystem.prototype.listAvailableCars = function () {
        console.log("Available cars:");
        this.cars.forEach(function (car) {
            if (car.isAvailable()) {
                console.log(car.getCarType() + " - " + car.getRentalPrice() + "€/day");
            }
        });
        console.log("-------------------");
    };
    CarRentalSystem.prototype.findCarByType = function (type) {
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.getCarType().toLowerCase() === type.toLowerCase() && car.isAvailable()) {
                return car;
            }
        }
        return null;
    };
    CarRentalSystem.prototype.rentCarByType = function (type) {
        var car = this.findCarByType(type);
        if (car) {
            car.rentCar();
        }
        else {
            console.log("This type (" + type + ") isn't available.");
        }
    };
    return CarRentalSystem;
}());
var car1 = new SUV(true);
var car2 = new EconomyCar(false);
var car3 = new LuxuryCar(true);
var rentalSystem = new CarRentalSystem();
rentalSystem.addCar(car1);
rentalSystem.addCar(car2);
rentalSystem.addCar(car3);
rentalSystem.listAvailableCars();
var clientType = "SUV";
console.log("You searched for: " + clientType);
var clientCar = rentalSystem.findCarByType(clientType);
if (clientCar) {
    console.log("Found car: " + clientCar.getCarType() + " - " + clientCar.getRentalPrice() + "€/day");
}
else {
    console.log("This car isn't available.");
}
rentalSystem.rentCarByType(clientType);
rentalSystem.listAvailableCars();
