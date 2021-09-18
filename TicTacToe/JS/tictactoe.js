


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



function checkWinConditions() {
    if         (arrayIncludes('OX', '1X', '2X')) { drawWinLine(50, 100, 588, 100) }
    else if    (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if    (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 304) }
    else if    (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if    (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 100, 558) }
    else if    (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if    (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if    (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if    (arrayIncludes('00', '10', '20')) { drawWinLine(50, 100, 558, 100) }
    else if    (arrayIncludes('30', '40', '50')) { drawWinLine(50, 304, 558, 304) }
    else if    (arrayIncludes('60', '70', '80')) { drawWinLine(50, 508, 558, 508) }
    else if    (arrayIncludes('00', '30', '60')) { drawWinLine(100, 50, 100, 558) }
    else if    (arrayIncludes('10', '40', '70')) { drawWinLine(304, 50, 304, 558) }
    else if    (arrayIncludes('20', '50', '80')) { drawWinLine(508, 50, 508, 558) }
    else if    (arrayIncludes('60', '40', '20')) { drawWinLine(100, 508, 510, 90) }
    else if    (arrayIncludes('00', '40', '80')) { drawWinLine(100, 100, 520, 520) }
    else if    (selectedSquares.length >= 9) {
        audio("Media/tie.mp3");
        setTimeouit(function () { resetGame(); }, 1000);
    }
    function arrayIncludes(squareA, squareB, SquareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true }
    }
}


function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function()  {body.style.pointerEvents = 'auto';}, 1000);
}