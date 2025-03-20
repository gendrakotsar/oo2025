interface Adder{
    add(nr:number):void; // A method to add a number
    getSum():number; // A method to return the current sum
    getAverage();
    //reset():void;
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


class StoringAdder implements Adder{
    protected store: number[]=[]; // Instead of maintaining a single sum, we store each number in an array.

    add(nr: number){
        this.store.push(nr);

    }

    getSum(): number{ 
        let sum: number=0;
        for(let amount of this.store){sum+=amount;}
        return sum; 
    }

    getAverage(){ // New method to calculate and return the average of all the numbers added
        if(this.store.length>0){ // Check if there are any numbers added (count is greater than 0)
            return this.getSum()/this.store.length; // If count is greater than 0, calculate and return the answer
        }
        return 0;
    }

    getRange(){
        if(this.store.length==0){return 0;}
        let minimum: number=this.store[0]; 
        let maximum: number=minimum;
        for(let amount of this.store){
            if(amount<minimum){minimum=amount;}
            if(amount>maximum){maximum=amount;}
        }
        return maximum-minimum;
    }
}

let adder1: StoringAdder=new StoringAdder();
let counter1: CharCounter=new CharCounter(adder1);
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