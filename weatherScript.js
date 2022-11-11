// ----------City Alert----------------------------------------

function displayCity() {
    alert('loading weather report... ')
}

// -----------Remove Pop Up -----------------------------------

function removeAccept(element) {
    element.remove()
}
// ------------Change Temp Values-------------------------------

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}


function pickTemp(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var temp = document.querySelector('#temp' + i);
        var tempVal = parseInt(temp.innerText);
        if(element.value == "°C") {
            temp.innerText = f2c(tempVal);
        } else {
            temp.innerText = c2f(tempVal);
        }
    }

}   
