let temperature = 24; //int
let display = document.querySelector("#display");

console.log(temperature);
// Temperatur gleich in HTML ausgeben (beim Laden)
display.innerHTML = temperature;

let changeTemperature = function (direction) {
    if (direction == "up") {
        temperature++;
    }

    if (direction == "down") {
        temperature--;
    }

    console.log(temperature);
    // Aktuelle Temperatur in HTML ausgeben
    display.innerHTML = temperature;
};
