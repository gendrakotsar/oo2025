import { getSourceMapRange } from "typescript";

interface Adder{
    add(nr:number):void; // A method to add a number
    getSum():number; // A method to return the current sum
    reset():void;
}

class CharCounter{
    // Constructor that takes an adder object as a parameter and stores it in a protected variable
    constructor(protected adder: Adder){} // Add the number of characters in a given to the Adder
        // Method which is designed to take a word (a string)
        addWordCharacters(word: String): void{
            this.adder.add(word.length);
        }
        getCharacterCount():number{
            return this.adder.getSum();
        }
    }


class SimpleAdder implements Adder{
    protected sum: number=0; // Initial sum is 0. Without the initial value sum would be undefined.
    add(nr: number){this.sum+=nr;} // Add the given number to sum
    getSum(): number{  // Return the current sum 
        return this.sum
    }
    reset(){
        this.sum=0;
    }
}

let adder1: Adder=new SimpleAdder();
let counter1: CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
// adder1.add(3); 
// adder1.add(5);
// console.log(adder1.getSum());
// adder1.reset();
// console.log(adder1.getSum());