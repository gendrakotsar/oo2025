const speeds: number[] = [50, 70, 90]; 

let totalDistance: number = 0;      
let kmCompleted: number = 0;       
let currentSpeed: number = speeds[0] / 60; 
let timeElapsed: number = 0;     
const totalMinutes: number = 3;    

for (let minute = 1; minute <= totalMinutes; minute++) {
  while (timeElapsed < minute) {
    const timeRemaining = minute - timeElapsed;                  
    const nextKmDistance = (kmCompleted + 1) - totalDistance;     
    const timeToNextKm = nextKmDistance / currentSpeed;  

    if (timeToNextKm <= timeRemaining) {
      totalDistance += nextKmDistance;       
      timeElapsed += timeToNextKm;          
      kmCompleted += 1;                      

      if (kmCompleted < speeds.length) {
        currentSpeed = speeds[kmCompleted] / 60;  
      } 

    } else {
      totalDistance += currentSpeed * timeRemaining;  
      timeElapsed += timeRemaining;                  
    }
  }

  console.log(`${totalDistance.toFixed(3)} km at minute ${minute}`);
}
