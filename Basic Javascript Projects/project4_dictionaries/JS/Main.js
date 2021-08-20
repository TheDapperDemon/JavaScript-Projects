// dictionary function with a delete statement:
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    // This is the line (below) used for the html doc to retrieve the element "Dictionary" from this js file:
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}