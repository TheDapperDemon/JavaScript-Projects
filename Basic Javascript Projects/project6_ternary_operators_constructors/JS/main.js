
// Possible ternary operation? honestly not sure:

function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough!";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Customer class:

class Customer
    {
        string fullName;
        Boolean Active;
        Customer(string NamedNodeMap){
            Fullname = NamedNodeMap;
            Active = true;
        }
    }

// Customer list:

                Customer cust = new Customer("Jonah Diaz");

// Attempt at a Nested Function:

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}