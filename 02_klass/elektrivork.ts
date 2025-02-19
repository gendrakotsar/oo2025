class Resistor {
    constructor(public r: number) {}

    getCurrent(u: number): number {
        return u / this.r;
    }

    getPower(u: number): number {
        return (u * u) / this.r;
    }
}

class Elektrivõrk {
    resistors: Resistor[] = [];
    pinge: number;
    maxCurrent: number;

    constructor(pinge: number, maxCurrent: number) {
        this.pinge = pinge;
        this.maxCurrent = maxCurrent;
    }

    lisaTakisti(takisti: Resistor) {
        this.resistors.push(takisti);
    }

    getTotalCurrent(): number {
        return this.resistors.reduce((summa, takisti) => summa + takisti.getCurrent(this.pinge), 0);
    }

    getTotalPower(): number {
        return this.resistors.reduce((summa, takisti) => summa + takisti.getPower(this.pinge), 0);
    }

    kasOhutu(): string {
        return this.getTotalCurrent() <= this.maxCurrent ? "Ohutu" : "Ohtlik";
    }

    kuvaInfo() {
        console.log("Elektrivõrk " + this.pinge + "V");
        console.log("Kokku vool: " + this.getTotalCurrent().toFixed(2) + " A");
        console.log("Kokku võimsus: " + this.getTotalPower().toFixed(2) + " W");
        console.log("Võrgu seisund: " + this.kasOhutu());
        console.log("---------------------");
    }
}

let minuVõrk = new Elektrivõrk(230, 10);

minuVõrk.lisaTakisti(new Resistor(100));
minuVõrk.lisaTakisti(new Resistor(200));
minuVõrk.lisaTakisti(new Resistor(500));

minuVõrk.kuvaInfo();

minuVõrk.lisaTakisti(new Resistor(50));
minuVõrk.kuvaInfo();