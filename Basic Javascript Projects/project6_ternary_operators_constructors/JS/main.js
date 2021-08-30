
// Ternary operation:

function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough!";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Constructor and Keywords:

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Diane = new Vehicle("Jeep", "Trail Hawk", 2019, "Black");
var Erik = new Vehicle("Ford", "Pinto", 1979, "Purple");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}

// Nested Function:

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}


// // Customer class:

// class Customer
//     {
//         string fullName;
//         Boolean Active;
//         Customer(string NamedNodeMap){
//             Fullname = NamedNodeMap;
//             Active = true;
//         }
//     }

// // Customer list:

//                 Customer cust = new Customer("Jonah Diaz");