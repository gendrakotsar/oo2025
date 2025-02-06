import { SymbolDisplayPartKind } from "typescript";

let eesnimi:string="Juku";
let vanus:number=32;
console.log("abc");
console.log("Tere, "+eesnimi);
if(vanus<7){
    console.log("Tasuta");
} else {
    if(vanus<16){
        console.log("Osta lapsepilet");
    } else {
        console.log("Osta täispilet");
    }
}
let symbolid:string[]=[];
for(let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}
console.log(symbolid.join(""));