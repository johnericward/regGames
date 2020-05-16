


//array of words

var wordList = ["hermione", "zelda", "link", "taco", "pizza", "boat", "truck",
     "record", "burrito", "elephant", "lion", "salad", "frisbee", "mario", "heart", "gymnastics", "hooray", "delater", "kelsey", "display", "lava", "peaches", "flute", "trombone", "legos", "donkey", "ship", "pool", "championship", "polyjuice", "hogwarts", "harry", "ron", "luna", "draco", "dobby", "fluffy", "hippogriff", "gryffindor", "hedwig", "triwizard", "train", "quidditch"];

/*
var wordList = ["polyjuice", "hogwarts", "hermione", "harry", "ron", "luna", "draco",
     "dobby", "fluffy", "hippogriff", "gryffindor", "hedwig", "triwizard", "portkey", "quidditch", "gymnastics", "hooray", "lava", "peaches", "flute", "trombone", "legos", "donkey", "ship", "pool", "championship"];
*/

//chooses a word from list
var wordOnDeck = wordList[Math.floor(Math.random() * wordList.length)];

//renders word with blanks instead of letters
var answers = [];

for (var i = 0; i < wordOnDeck.length; i++) {
    answers[i] = "_";
}



var remainingLetters = wordOnDeck.length;

// score isn't working=================================================================
var scoreJS = 0;
var addScoreJS = document.getElementById("scoreCSS");




//array of guessable letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//  chosenLetter = letters
var letterChosen = [];
var wrongLetters = [];

// //start message
// var startMessageJS = true;


// if (startMessageJS = true) {

// } else {
    // This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    
    // console.log(wrongLetters.length + " <-- wrong Letters");

    var blanks = document.getElementById("blankSpaces");
    blanks.textContent = answers.join(" ");

    // Determines which key was pressed.
    var userGuess = event.key;


    // if the userGuess is in the possible guesses "letters" array and not already chosen then...
    if (letters.indexOf(userGuess) > -1 && letterChosen.indexOf(userGuess) === -1) {
        // if userGuess in in the array of the single wordOnDeck then...
        if (wordOnDeck.indexOf(userGuess) > -1) {
            // console log "correct!"
            console.log("correct!")
            // scan the wordOnDeck
            for (var j = 0; j < wordOnDeck.length; j++) {
                // if userGuess = single letter within wordOnDeck then...
                if (userGuess === wordOnDeck[j]) {
                    // the blank word's matching letter is switched to the user's guess
                    answers[j] = userGuess;
                };

            };

            var blanks = document.getElementById("blankSpaces");
            blanks.textContent = answers.join(" ");

            if (answers.join("") === wordOnDeck) {
                var resultsJS = document.getElementById("results");
                resultsJS.textContent = "YOU WON! (This page will reset in 5 seconds.)";

                // I could not get the score to work============================================
                scoreJS++
                

                setTimeout(function () { location.reload(); }, 5000);
            };

            

        } else {
            console.log("incorrect")
            wrongLetters.push(userGuess)
            var displayWrongLetters = document.getElementById("wrongLettersCSS");
            displayWrongLetters.textContent = wrongLetters.join(", ");
            if (wrongLetters.length = wrongLetters.length) {
                var strikesJS = document.getElementById("strikesCSS");
                strikesJS.textContent = wrongLetters.length;

                // hangmanPic experiment
                    
                if (wrongLetters.length == 10) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic10" src="assets/images/hmPic10.png" height=100px />')
                } else if (wrongLetters.length == 9) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic9" src="assets/images/hmPic9.png" height=100px />')
                } else if (wrongLetters.length == 8) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic8" src="assets/images/hmPic8.png" height=100px />')
                } else if (wrongLetters.length == 7) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic7" src="assets/images/hmPic7.png" height=100px />')
                } else if (wrongLetters.length == 6) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic6" src="assets/images/hmPic6.png" height=100px />')
                } else if (wrongLetters.length == 5) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic5" src="assets/images/hmPic5.png" height=100px />')
                } else if (wrongLetters.length == 4) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic4" src="assets/images/hmPic4.png" height=100px />')
                } else if (wrongLetters.length == 3) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic3" src="assets/images/hmPic3.png" height=100px />')
                } else if (wrongLetters.length == 2) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic2" src="assets/images/hmPic2.png" height=100px />')
                } else if (wrongLetters.length == 1) {
                    $(".hangmanPic").empty();
                    $(".hangmanPic").append('<img id="pic1" src="assets/images/hmPic1.png" height=100px />')
                } else if (wrongLetters.length == 0) {
                    $(".hangmanPic").append('<img id="pic0" src="assets/images/hmPic0.png" height=100px />')

                    // end of hangmanPic experiment
                };
                if (wrongLetters.length > 9) {
                    console.log("exceeded 9 wrong letters");
                    var losingResultsJS = document.getElementById("losingResults");
                    losingResultsJS.textContent = "Better luck next time! (This page will reset in 5 seconds.)";
                    strikesJS.textContent = "10";
                    setTimeout(function () { location.reload(); }, 5000);
                };
            };
            letterChosen.push(userGuess)

            // score not working===================================================================
            addScoreJS.textContent = scoreJS;
        };
        // };

        // console.log(wrongLetters.length);

        
    



    };
};
