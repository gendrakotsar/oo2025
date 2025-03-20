interface RentalCar {
    getCarType(): string; 
    getRentalPrice(): number; 
    isAvailable(): boolean; 
    rentCar(): void;
}

class EconomyCar implements RentalCar {
    private available: boolean;

    constructor(available: boolean) {
        this.available = available;
    }

    getCarType(): string {
        return "Economy";
    }

    getRentalPrice(): number {
        return 45; 
    }

    isAvailable(): boolean {
        return this.available;
    }

    rentCar(): void {
        if (this.available) {
            console.log(this.getCarType() + " car is rented.");
            this.available = false;
        } else {
            console.log(this.getCarType() + " car isn't available.");
        }
        console.log("-------------------");
    }
}

class LuxuryCar implements RentalCar {
    private available: boolean;

    constructor(available: boolean) {
        this.available = available;
    }

    getCarType(): string {
        return "Luxury";
    }

    getRentalPrice(): number {
        return 120; 
    }

    isAvailable(): boolean {
        return this.available;
    }

    rentCar(): void {
        if (this.available) {
            console.log(this.getCarType() + " car is rented.");
            this.available = false;
        } else {
            console.log(this.getCarType() + " car isn't available.");
        }
        console.log("-------------------");
    }
}

class SUV implements RentalCar {
    private available: boolean;

    constructor(available: boolean) {
        this.available = available;
    }

    getCarType(): string {
        return "SUV";
    }

    getRentalPrice(): number {
        return 70; 
    }

    isAvailable(): boolean {
        return this.available;
    }

    rentCar(): void {
        if (this.available) {
            console.log(this.getCarType() + " car is rented.");
            this.available = false;
        } else {
            console.log(this.getCarType() + " car isn't available.");
        }
        console.log("-------------------");
    }
}

class CarRentalSystem {
    private cars: RentalCar[] = [];

    addCar(car: RentalCar) {
        this.cars.push(car);
    }

    listAvailableCars() {
        console.log("Available cars:");
        this.cars.forEach(car => {
            if (car.isAvailable()) {
                console.log(car.getCarType() + " - " + car.getRentalPrice() + "€/day");
            }
        });
        console.log("-------------------");
    }

    findCarByType(type: string): RentalCar | null {
        for (let car of this.cars) {
            if (car.getCarType().toLowerCase() === type.toLowerCase() && car.isAvailable()) {
                return car;
            }
        }
        return null;
    }

    rentCarByType(type: string) {
        let car = this.findCarByType(type);
        if (car) {
            car.rentCar();
        } else {
            console.log("This type (" + type + ") isn't available.");
        }
    }
}

let car1 = new SUV(true);
let car2 = new EconomyCar(false); 
let car3 = new LuxuryCar(true);

let rentalSystem = new CarRentalSystem();
rentalSystem.addCar(car1);
rentalSystem.addCar(car2);
rentalSystem.addCar(car3);

rentalSystem.listAvailableCars();

let clientType = "SUV";
console.log("You searched for: " + clientType);
let clientCar = rentalSystem.findCarByType(clientType);
if (clientCar) {
    console.log("Found car: " + clientCar.getCarType() + " - " + clientCar.getRentalPrice() + "€/day");
} else {
    console.log("This car isn't available.");
}

rentalSystem.rentCarByType(clientType);

rentalSystem.listAvailableCars();
