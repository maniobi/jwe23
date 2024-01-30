const quiz = [
    {
        q: "Wie viele Saiten hat eine Gitarre?",
        a: ["4 oder 5", "6 oder 12", "7 oder 9", "3 oder 6"],
        correct: 1,
    },
    {
        q: "Wie lange ist der Erdumfang?",
        a: ["37.422 km", "29.422 km", "64.283 km", "81.230 km"],
        correct: 0,
    },
    {
        q: "Wann hat Colubus Amerika entdeckt?",
        a: ["1345", "nie", "1492", "1429"],
        correct: 2,
    },
];

let correctAnswers = 0;
let currentQuestion = 0;

let showQuestion = function (index) {
    let question = quiz[index].q;
    $("#question").text(question);
    showAnswers(index);
};

let showAnswers = function (index) {
    let answers = quiz[index].a;
    // vor befüllen leeren
    $("#answers").empty();
    // Jede Frage einzel in das div#answers einfügen
    $(answers).each(function (index, answer) {
        $("#answers").append(`
            ${index}: <button data-index="${index}" class="answer-btn">${answer}</button><br>
        `);
    });
};

const checkAnswer = function (questionIndex, answerIndex) {
    // prüfen ob eine frage richtig beantwortet wurde

    let correctAnswer = quiz[questionIndex].correct;
    let givenAnswer = answerIndex;

    if (givenAnswer == correctAnswer) {
        console.log("✓ - Frage RICHTIG beantwortet!");
        // Gib der gewählten Antwort eine Farbe
        $("#answers button:focus").css({
            "background-color": "green",
            color: "darkgreen",
        });
        correctAnswers++;
    } else {
        console.log("X -Frage FALSCH beantwortet!");
        // Gib der gewählten Antwort eine Farbe
        $("#answers button:focus").css({
            "background-color": "red",
            color: "deepred",
        });
    }

    // setze alle Buttons auf "disabled", damit nicht mehrfach geclicked werden kann
    $("#answers button").prop("disabled", true);

    // warte 3 Sekunden bis die nächste Frage angezeigt wird
    setTimeout(function () {
        $("#answers button").prop("disabled", false);
        $("#answers button:focus").css("background-color", "");
        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;

            showQuestion(currentQuestion);
        } else {
            showResult();
        }
    }, 3000);
};

const showResult = function () {
    // DIVs leeren
    $("#question, #question").empty();
    // Result DIV mit dem Text füllen und den Platzhaltern zur Darstellung des Ergebnisses
    $("#result").html(`
        Sie haben <b>${correctAnswers}</b> von ${quiz.length} Fragen richtig beantwortet!
    `);
};

/* 
Event handler für dynamisch (in der zukunft) 
generierte Elemente (innerhalb von div#answer)
*/
$("#answers").delegate("button.answer-btn", "click", function () {
    checkAnswer(currentQuestion, $(this).data("index"));
});

showQuestion(currentQuestion);
