"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = 0;
    }
    Potentsiomeeter.prototype.muudaNurk = function (delta) {
        var uusnurk = this.nurk + delta;
        if (uusnurk < this.nurkMin) {
            throw new Error("liiga väike nurk");
        }
        if (uusnurk > this.nurkMax) {
            throw new Error("liiga suur nurk");
        }
        this.nurk = uusnurk;
    };
    Potentsiomeeter.prototype.getR = function () {
        return -1; //arvutame pärast
    };
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(80);
console.log(p1);
