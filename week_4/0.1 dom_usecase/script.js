function calculateSum() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var sum = firstNumber + secondNumber;
    document.getElementById('finalSum').innerHTML = 'Sum: ' + sum;
}
