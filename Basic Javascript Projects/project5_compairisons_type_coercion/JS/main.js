// Assigned Variables:
var D = "Dapper D3mon";
var X = " is my nickname";
var str = "Red Text Here";
var Y = 7 * 3;
var Z = 21

// window allert here:
window.alert("Dapper D3mon!")
document.write("Some say, \"Drive like hell and you'll get there!\" \"Live fast, die young, and leave a good lookin corpse!!\" I reply.");
document.getElementById("total").innerHTML = "Some say, \" Drive like hell and you'll get there! \" ";
document.getElementById("total2").innerHTML = " \"Live fast, die young, and leave a good lookin corpse!!\" I reply.";

// first expression with a number and a string:
document.getElementById("total3").innerHTML = D + X + Y;

// firts doc write:
document.write(str.fontcolor("red"));

// double equals, tripple equals, less than, greater than, and the "And" operators:
function double_Equal() {
    var simple_Math = 10 == 10; 
    document.getElementById("dE").innerHTML = "10 is equal to 10 making this " + simple_Math;
}

function triple_Equal() {
    var simple_Math = Y === Z; 
    document.getElementById("tE").innerHTML = "Y represents 21 and Z represents 21, since 21 is equal to 21 this is " + simple_Math;
}

function less_Than() {
    var simple_Math = 9 < 10; 
    document.getElementById("lT").innerHTML = "Since 9 is less than 10 this is " + simple_Math;
}

function greater_Than() {
    var simple_Math = 10 > 5; 
    document.getElementById("gT").innerHTML = "10 is greater than 5 making this " + simple_Math;
}

function and_Operator() {
    var simple_Math = 5 < 2 && 6 < 10; 
    document.getElementById("aO").innerHTML = "5 is greater than 2 and 6 is less than 10, becaus they are both true that makes this " + simple_Math;
}

document.getElementById("tripleEqual").innerHTML = "Y === Z";
document.getElementById("lessThan").innerHTML = "9 < 10";
document.getElementById("greaterThan").innerHTML = "10 > 5";
document.getElementById("andOperator").innerHTML = "5 > 2 && 6 < 10";

// not operator:
function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

document.getElementById("doubleEqual").innerHTML = "";