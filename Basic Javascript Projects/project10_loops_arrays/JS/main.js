// While loop function:

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("count_To_Ten").innerHTML = Digit;
}

// For loop function:

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array function :

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "eating";
    Cat_Picture[2] = "playing";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this pic, the cat is " + 
        Cat_Picture[2] + ".";
}

// Object utilizing "let": 
var B = 25
document.write(B); {
    let B = 28;
    document.write("<br>" + B);
}