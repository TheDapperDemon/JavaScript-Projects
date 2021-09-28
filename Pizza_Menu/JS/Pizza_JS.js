function getReciept() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal= 0;
        text1 = text1+selectedSize+'<br>';
    }
    if (selectedSize === 'Personal Pizza') {
        sizeTotal = 6;
    }
    else if (selectedSize === 'Small Pizza') {
        sizeTotal = 8;
    }
    else if (selectedSize === 'Medium Pizza') {
        sizeTotal = 10
    }
    else if (selectedSize === 'Large Pizza') {
        sizeTotal = 14;
    }
    else if (selectedSize === 'XL Pizza') {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+' = $'+sizeTotal+'.00');
    console.log('size text1: '+text1);
    console.log('subtotal: $'+runningTotal+'.00');
    getTopping(runningTotal,text1);
};

function toppingArray() {
    for (var i = 0; i < toppingArray.length; i++) {
        if(toppingArray[i].checked) {
            selectTopping.push(toppingArray[i].value);
}

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log('selected topping item: ('+toppingArray[j].value+')');
            text1 = text1+toppingArray[j].value+'<br>';
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log('total selected topping items: '+toppingCount);
    console.log('topping text1: '+text1);
    console.log('Purchase Total: '+'$'+runningTotal+'.00');
    document.getElementById('showText').innerHtml=text1;
    document.getElementById('totalPrice').innerHTML = '<h3>Total: <strong>$'+runningTotal+'.00'+'</strong><h3>';
};