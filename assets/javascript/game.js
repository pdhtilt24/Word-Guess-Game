var games = [
    "ironman",
    "hulk",
    "captainamerica",
    "drstrange",
    "spiderman",
    "thor",
    "blackpanther",
    "blackwidow",
    "antman",
    "loki",
    "warmachine",
    "blackwidow"
  ];
  
  var computerWord = "";
  var lettersOfWord = [];
  var blanksAndCorrect = [];
  var wrongGuess = [];
  var blanks = 0;
  
  var wins = 0;
  var losses = 0;
  var guessLeft = 15;
  
  var c = document.getElementById("");
  var s = document.getElementById("s");
  
  function startup() {
    computerWord = games[Math.floor(Math.random() * games.length)];
    lettersOfWord = computerWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
      blanksAndCorrect.push("_");
    }
  }
  
  function reset() {
    guessLeft = 15;
    wrongGuess = [];
    blanksAndCorrect = [];
    startup();
  }
 
  
 
  
  startup();
  
  document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    gameRun();
    document.getElementById("guessed").innerHTML = "  " + wrongGuess.join(" ");
  };
  
  //console logs below
  console.log(games.length);
  console.log(computerWord);
  console.log(letterOfWord);
  console.log(blanks);
  console.log(blanksAndCorrect);