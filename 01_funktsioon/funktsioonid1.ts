function kehamassiindeks(cm:number, kg:number):number{
    let m:number=cm/100;
    return kg/(m*m);
}

console.log(kehamassiindeks(176, 55));

let massid:number[]=[80, 90, 100, 110, 115]
for(let mass of massid){
    console.log(kehamassiindeks(181, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);

//Loo teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
//aitab käsklus Math.pow

function kehamassiindeks2(cm:number, kg:number):number{
    let m:number=cm/100;
    return 1.3*kg/Math.pow(m, 2.5);
}

//Arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures,
//näidake, kuidas väärtused erinevad

let indeksid2:number[]=massid.map(mass => kehamassiindeks2(181, mass));
console.log(indeksid2);

// Arvutage mõlema valemiga sama massi ja eri pikkuste juures

let vastus:number[][]=[];
for(let pikkus=150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus)

