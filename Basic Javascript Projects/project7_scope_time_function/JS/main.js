
// If statement function:

function get_Date(){
    if (new Date().getHours() <  18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Else statement function:

function Age_Function(){
    if (Age >= 18) {
        Vote = "You are old enough to vote!"
    }
    else{
        Vote = "You are not old enough to vote."
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}