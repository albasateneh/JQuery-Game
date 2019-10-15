$(document).ready(function() {
    //GLOBAL VARIABLES
    var gameCounter = 0;
    var wins = 0;
    var losses = 0;
    var numberToGuess = 0;
    
    const crystalOne = {
       button: $('#button-left'),
       value:  Math.floor((Math.random() * 13) + 1)
    };
    const crystalTwo = {
        button: $('#button-middle'),
        value: Math.floor((Math.random() * 13) + 1)
    };
    const crystalThree = {
        button: $('#button-right'),
        value: Math.floor((Math.random() * 13) + 1)
    };


    //Testing
    
    //FUNCTIONS
   function startGame() {
    var numberToGuess = Math.floor((Math.random() * 121) + 19);
    gameCounter = 0;
    console.log(crystalOne.value);
    console.log(crystalTwo.value);
    console.log(crystalThree.value);
    console.log('Number to Guess: ' + numberToGuess);
   }

   function counter() {
    $(crystalOne.button).on('click', function() {
        gameCounter = gameCounter + crystalOne.value;
        console.log(gameCounter);
    });
    $(crystalTwo.button).on('click', function() {
        gameCounter = gameCounter + crystalTwo.value;
        console.log(gameCounter);
    });
    $(crystalThree.button).on('click', function() {
        gameCounter = gameCounter + crystalThree.value;
        console.log(gameCounter);
    });

    if (gameCounter == numberToGuess) {
        wins ++;
        console.log('Wins: ' + wins);
        startGame();
    }
    else {
        losses ++;
        console.log('Losses: ' + losses)
        startGame();
    }

   }
   
   
    //TESTING 
    
    //GAME FUNCTIONALITY
    startGame();
    counter();

    //TESTING
    
    //
})