// Harmooniline keskmine //
// Koosta funktsioon, mille sisendiks on kahe kilomeetripikkuse lõigu läbimise kiirused (km/h), väljundiks nende //
// kahe kilomeetri läbimise keskmine kiirus. //
function keskmineKiirus(kiirus1, kiirus2) {
    return (2 * kiirus1 * kiirus2) / (kiirus1 + kiirus2);
}
console.log("Kahe kilomeetri läbimise keskmine kiirus on " + keskmineKiirus(30, 60) + " km/h");
