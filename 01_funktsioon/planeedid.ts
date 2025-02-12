// @ts-nocheck

class Vektor{
    constructor(public x:number, public y:number){}

    kuva():void{
        console.log("("+this.x.toFixed(2)+", "+this.y.toFixed(2)+")");
    }

    pikkus():number{
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
}

let planeedid={
    Maa:{g:9.81, ρ:1.225},
    Kuu:{g:1.62, ρ:0},
    Marss:{g:3.71, ρ:0.02},
    Veenus:{g:8.87, ρ:65},
    Jupiter:{g:24.79, ρ:0},
    Saturn:{g:10.44, ρ:0},
    Uraan:{g:8.69, ρ:0},
    Neptuun:{g:11.15, ρ:0}
};

let mass=70;
let hüpeMaal=0.5; // m
let algkiirusMaal=Math.sqrt(2*planeedid["Maa"].g*hüpeMaal); // v=sqrt(2gh)

// Hüppe andmed
function hüppeValem(planeet:string, nurk:number){
    let g=planeedid[planeet].g;
    let ρ=planeedid[planeet].ρ;
    let algkiirus=algkiirusMaal*(planeedid["Maa"].g/g);
    let nurkRad=nurk*Math.PI/180;
    let hüppeAeg=(2*algkiirus*Math.sin(nurkRad))/g;
    let maxKõrgus=(Math.pow(algkiirus*Math.sin(nurkRad), 2))/(2*g);
    let horisontaalneKaugus=algkiirus*Math.cos(nurkRad)*hüppeAeg;

    // Atmosfääri takistus
    if (ρ>0){
        let atmFaktor=Math.exp(-ρ/10);
        maxKõrgus*=atmFaktor;
        horisontaalneKaugus*=atmFaktor;
    }

    return { hüppeAeg, maxKõrgus, horisontaalneKaugus, trajektoor: new Vektor(horisontaalneKaugus, maxKõrgus) };
}

console.log("Kasutaja mass: "+mass+" kg");
console.log("Hüpe Maal: "+hüpeMaal+" m");
console.log("Hüpped eri planeetidel:");

Object.keys(planeedid).forEach(function(planeet){
    let hüpe=hüppeValem(planeet, 45);

    console.log(planeet+":");
    console.log("Hüppe kestus: "+hüpe.hüppeAeg.toFixed(2)+" s");
    console.log("Maksimaalne kõrgus: "+hüpe.maxKõrgus.toFixed(2)+" m");
    console.log("Horisontaalne kaugus: "+hüpe.horisontaalneKaugus.toFixed(2)+" m");
    console.log("Hüppe trajektoor vektor:");
    hüpe.trajektoor.kuva();
    console.log("------------------------------");
});
