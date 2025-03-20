interface CalculatingFunction{
    calculate(x:number): number; // Calculate method takes a number (x) as input and return a number
    inputUnit(): string; // The input e.g inches
    outputUnit(): string; // The output returns the result (e.g CM)
    outputUnit(): string;
}

class InchestoCM implements CalculatingFunction{
    calculate(inches: number): number { // The calculate method is implementing to convert inches 
        return inches*2.54;
    }
    inputUnit(): string{ // This returns the unit for the input which is inches
        return "in"
    }
    outputUnit(): string{ // This returns the unit for the result which is CM
        return "cm";
    }
}

class CmtoInches implements CalculatingFunction{
    calculate(cm: number): number { // The calculate method is implementing to convert inches 
        return cm/2.54;
    }
    inputUnit(): string{ // This returns the unit for the input which is inches
        return "cm"
    }
    outputUnit(): string{ // This returns the unit for the result which is CM
        return "in";
    }
}