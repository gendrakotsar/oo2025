var InchestoCM = /** @class */ (function () {
    function InchestoCM() {
    }
    InchestoCM.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchestoCM.prototype.inputUnit = function () {
        return "in";
    };
    InchestoCM.prototype.outputUnit = function () {
        return "cm";
    };
    return InchestoCM;
}());
