var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = 0;
        this.R = 0;
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
    //arvutage potentsiomeetri praeguse hetke takistus
    Potentsiomeeter.prototype.getR = function () {
        return this.rMin + (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
    };
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(30);
console.log(p1);
console.log(p1.getR());
// kangi nurk -120 ... +120
// takisti 100 ... 500
// 100+230/240(500-100)
