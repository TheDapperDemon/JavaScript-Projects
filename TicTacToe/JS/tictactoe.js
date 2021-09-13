let activePlayer = "X";
let selectedSquares = [];

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === "X") {
            select.style.backgroundImage = "url('Pics/x.png')";
        }  else {
            select.style.backgroundImage = "url('Pics/o.png')";
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer.Player = 'X';
        }
    }