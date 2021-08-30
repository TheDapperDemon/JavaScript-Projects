var Y = 10;
console.log (Y);
// If Function:

function get_Date(){
    if (new Date().getHours() <  18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Else Function:

function Age_Function(){
    var Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!"
    }
    else{
        Vote = "You are not old enough to vote."
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
    console.log (Age);
}

console.log (X);
function Error1() {
    document.write(X);
}


// Else If Function:

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is Morning!";
    }
    else if (Time >= 12 == Time < 18) {
            Reply = "It is Afternoon!";
    }
    else {
        Reply = "It is Evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}