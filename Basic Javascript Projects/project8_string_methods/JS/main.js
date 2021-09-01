// Concatentrate method function. in this we will be writing a function named full_Sentence and then assigning strings to variables in nparts 1 through 4 in order to concatetrate them all on line 7:
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice method function :
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy...";
    var Section = Sentence.slice(0,47);
    document.getElementById("Slice").innerHTML = Section;
}

// toPrecision method function :
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toString method Function:
function toString_Method() {
    var num = 15;
    var n = num.toString();
    document.getElementById("String").innerHTML = n;
}