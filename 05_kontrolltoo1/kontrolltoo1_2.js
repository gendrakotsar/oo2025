// Funktsioonile antakse ette kilomeetripikkuste lõikude läbimiste keskmised kiirused kogumina (km/h). Väljasta 
// kogu selle tee läbimise keskmine kiirus. 
function koguKeskmineKiirus(kiirused) {
    var koguAeg = kiirused.reduce(function (summa, kiirus) { return summa + 1 / kiirus; }, 0);
    return kiirused.length / koguAeg;
}
console.log("Kogu tee läbimise keskmine kiirus on " + koguKeskmineKiirus([1, 62, 85]) + " (km/h)");
