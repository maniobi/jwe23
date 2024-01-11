const settings = {
    states: [
        "0", // rot
        "01", // rot+gelb
        "2", // grün
        "1", // gelb
    ],
    state: "2", // wir starten mit grün
    duration: {
        red: 10, // sekunden zeit die die ampel rot ist
        green: 5, // sekunden zeit die die ampel grün ist
    },
};
// Start-Wert (state) in das DIV eintragen
$("#ampel").text(settings.state);

const fromGreenToRed = function () {
    window.setTimeout(function () {
        // von grün auf rot
        settings.state = settings.states[3]; // setzen auf gelb
        window.setTimeout(function () {
            settings.state = settings.states[0]; // setzen auf rot
            // Warten bis die andere Funktion aufgerufen wird
            window.setTimeout(fromRedToGreen, settings.duration.red * 1000);
        }, 1000);
    }, 1000);
};

const fromRedToGreen = function () {
    window.setTimeout(function () {
        // von rot auf grün
        settings.state = settings.states[1];
        window.setTimeout(function () {
            settings.state = settings.states[2];
            // Warten bis die andere Funktion aufgerufen wird
            window.setTimeout(fromGreenToRed, settings.duration.green * 1000);
        }, 1000);
    }, 1000);
};

window.setInterval(function () {
    $("#ampel").text(settings.state);
}, 1000);

fromGreenToRed();
