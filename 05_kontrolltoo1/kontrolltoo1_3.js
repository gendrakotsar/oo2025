var speeds = [50, 70, 90]; 
var totalDistance = 0; 
var kmCompleted = 0; 
var currentSpeed = speeds[0] / 60; 
var timeElapsed = 0; 
var totalMinutes = 3; 
var distances = []; 

for (var minute = 1; minute <= totalMinutes; minute++) {
    while (timeElapsed < minute) {
        var timeRemaining = minute - timeElapsed; 
        var nextKmDistance = (kmCompleted + 1) - totalDistance; 
        var timeToNextKm = nextKmDistance / currentSpeed; 

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

    distances.push(totalDistance);

    console.log(`${totalDistance.toFixed(3)} km at minute ${minute}`);
}

document.addEventListener("DOMContentLoaded", function () {
    const maxDistance = 3.5; 

    console.log("Distances:", distances);

    const line = document.getElementById('line');
    const markingsContainer = document.getElementById('markings');

    for (let km = 0; km <= maxDistance; km += 0.5) {
        const mark = document.createElement('div');
        mark.className = 'mark';
        mark.style.position = "absolute";
        mark.style.left = `${(km / maxDistance) * 100}%`;
        mark.style.width = "2px";
        mark.style.height = "10px";
        mark.style.backgroundColor = "black";
        mark.style.top = "-5px";
        line.appendChild(mark);

        const label = document.createElement('div');
        label.className = 'km-label';
        label.style.position = "absolute";
        label.style.left = `${(km / maxDistance) * 100}%`;
        label.style.transform = "translateX(-50%)"; 
        label.style.fontSize = "12px";
        label.style.marginTop = "12px";
        label.innerText = `${km} km`;
        markingsContainer.appendChild(label);
    }

    distances.forEach((distance, index) => {
        const point = document.createElement('div');
        point.className = 'point';
        point.style.position = "absolute";
        point.style.left = `${(distance / maxDistance) * 100}%`;
        point.style.width = "12px";
        point.style.height = "12px";
        point.style.borderRadius = "50%";
        point.style.top = "-12px";

        const colors = ["blue", "green", "red"]; 
        point.style.backgroundColor = colors[index];

        line.appendChild(point);
    });
});
