

function trigFunction(func) {
    let display = document.getElementById('display');
    display.value = eval('Math.' + func + '(' + display.value + ')');
}


function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let  display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}



function sqrtFunction() {
    let display = document.getElementById('display');
    display.value = eval('Math.sqrt(' + display.value + ')');
}

function logFunction() {
   let display = document.getElementById('display');
    display.value = eval('Math.log(' + display.value + ')');
}