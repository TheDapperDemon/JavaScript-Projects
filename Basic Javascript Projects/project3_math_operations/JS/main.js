// these two variables will be used to execute line 5:
var G = 19;
var A = 34;
// this is an expression of assigning the varriables above together through multiplication:
document.getElementById("math").innerHTML = G * A;
var B = 5
var C = 6
// This is a function utulizing multiple equations including + - * / elemant as well as the document.getElementById:
function multipleMath() {
    var simple_Math = (1+9) * 11 / 2 -5; 
    document.getElementById("Math").innerHTML = "1 plus 9, multiplied by 11, divided in half by 2 and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6; 
    document.getElementById("Math2").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math;
}

B++;

function increment() {
    var simple_Math = B * 3; 
    document.getElementById("Math3").innerHTML = "variable B is being added an increment of 1 then multiplied by 3 giving an asnwer of " + simple_Math;
}

C--;

function decrement() {
    var simple_Math = C * 3; 
    document.getElementById("Math4").innerHTML = "variable C is being subtracted a decrement of 1 then multiplied by 3 giving an asnwer of " + simple_Math;
}