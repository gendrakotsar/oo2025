var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return (u * u) / this.r;
    };
    return Resistor;
}());
var Elektrivõrk = /** @class */ (function () {
    function Elektrivõrk(pinge, maxCurrent) {
        this.resistors = [];
        this.pinge = pinge;
        this.maxCurrent = maxCurrent;
    }
    Elektrivõrk.prototype.lisaTakisti = function (takisti) {
        this.resistors.push(takisti);
    };
    Elektrivõrk.prototype.getTotalCurrent = function () {
        var _this = this;
        return this.resistors.reduce(function (summa, takisti) { return summa + takisti.getCurrent(_this.pinge); }, 0);
    };
    Elektrivõrk.prototype.getTotalPower = function () {
        var _this = this;
        return this.resistors.reduce(function (summa, takisti) { return summa + takisti.getPower(_this.pinge); }, 0);
    };
    Elektrivõrk.prototype.kasOhutu = function () {
        return this.getTotalCurrent() <= this.maxCurrent ? "Ohutu" : "Ohtlik";
    };
    Elektrivõrk.prototype.kuvaInfo = function () {
        console.log("Elektrivõrk " + this.pinge + "V");
        console.log("Kokku vool: " + this.getTotalCurrent().toFixed(2) + " A");
        console.log("Kokku võimsus: " + this.getTotalPower().toFixed(2) + " W");
        console.log("Võrgu seisund: " + this.kasOhutu());
        console.log("---------------------");
    };
    return Elektrivõrk;
}());
var minuVõrk = new Elektrivõrk(230, 10);
minuVõrk.lisaTakisti(new Resistor(100));
minuVõrk.lisaTakisti(new Resistor(200));
minuVõrk.lisaTakisti(new Resistor(10));
minuVõrk.kuvaInfo();
minuVõrk.lisaTakisti(new Resistor(50));
minuVõrk.kuvaInfo();
