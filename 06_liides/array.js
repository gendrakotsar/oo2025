var CharCounter = /** @class */ (function () {
    // Constructor that takes an adder object as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    } // Add the number of characters in a given to the Adder
    // Method which is designed to take a word (a string)
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var StoringAdder = /** @class */ (function () {
    function StoringAdder() {
        this.store = []; // Instead of maintaining a single sum, we store each number in an array.
    }
    StoringAdder.prototype.add = function (nr) {
        this.store.push(nr);
    };
    StoringAdder.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        }
        return sum;
    };
    StoringAdder.prototype.getAverage = function () {
        if (this.store.length > 0) { // Check if there are any numbers added (count is greater than 0)
            return this.getSum() / this.store.length; // If count is greater than 0, calculate and return the answer
        }
        return 0;
    };
    StoringAdder.prototype.getRange = function () {
        if (this.store.length == 0) {
            return 0;
        }
        var minimum = this.store[0];
        var maximum = minimum;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
        }
        return maximum - minimum;
    };
    return StoringAdder;
}());
var adder1 = new StoringAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
// adder1.add(3); 
// adder1.add(5);
// console.log(adder1.getSum());
// adder1.reset();
// console.log(adder1.getSum());
