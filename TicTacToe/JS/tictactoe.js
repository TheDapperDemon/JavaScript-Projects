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

        audio('Media/place.mp3');
        if(activePlayer === "O") {
            dasableClick();
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        return true;
    }
    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success){
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}