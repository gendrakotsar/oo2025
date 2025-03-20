"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; // Initial sum is 0. Without the initial value sum would be undefined.
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; }; // Add the given number to sum
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
// adder1.add(3); 
// adder1.add(5);
// console.log(adder1.getSum());
// adder1.reset();
// console.log(adder1.getSum());
