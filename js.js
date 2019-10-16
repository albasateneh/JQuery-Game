$(document).ready(function () {

    //GLOBAL VARIABLES
    var gameCounter = 0;
    var wins = 0;
    var losses = 0;
    var numberToGuess = 0;

    const crystalOne = {
        button: $('#button-left'),
        value: 0
    };
    const crystalTwo = {
        button: $('#button-middle'),
        value: 0
    };
    const crystalThree = {
        button: $('#button-right'),
        value: 0
    };


    //FUNCTIONS
    function startGame() {
        numberToGuess = Math.floor((Math.random() * 121) + 19);
        crystalOne.value = Math.floor((Math.random() * 13) + 1);
        crystalTwo.value = Math.floor((Math.random() * 13) + 1);
        crystalThree.value = Math.floor((Math.random() * 13) + 1);
        gameCounter = 0;
        console.log(crystalOne.value);
        console.log(crystalTwo.value);
        console.log(crystalThree.value);
        console.log('Number to Guess: ' + numberToGuess);
    }

    function counter() {
        $(crystalOne.button).on('click', function () {
            gameCounter = gameCounter + crystalOne.value;
            console.log('Game Counter: ' + gameCounter)

            if (gameCounter > numberToGuess) {
                losses++
                console.log('Losses: ' + losses);
                startGame()
            }
            else if (gameCounter === numberToGuess) {
                wins++
                console.log('Wins: ' + wins);
                startGame();
            }
        });
        $(crystalTwo.button).on('click', function () {
            gameCounter = gameCounter + crystalTwo.value;
            console.log('Game Counter: ' + gameCounter)
            if (gameCounter > numberToGuess) {
                losses++
                console.log('Losses: ' + losses);
                startGame()
            }
            else if (gameCounter === numberToGuess) {
                wins++
                console.log('Wins: ' + wins);
                startGame();
            }
        });
        $(crystalThree.button).on('click', function () {
            gameCounter = gameCounter + crystalThree.value;
            console.log('Game Counter: ' + gameCounter)
            if (gameCounter > numberToGuess) {
                losses++
                console.log('Losses: ' + losses);
                startGame()
            }
            else if (gameCounter === numberToGuess) {
                wins++
                console.log('Wins: ' + wins);
                startGame();
            }
        });

    }

    //GAME FUNCTIONALITY
    startGame();
    counter();

})