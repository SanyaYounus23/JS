var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var num3 = parseInt(prompt("Enter the third number:"));
var gcd = calculateGCDOfThreeNumbers(num1, num2, num3);
console.log("Greatest Common Divisor:", gcd);
function calculateGCD(x, y) {
    while (y !== 0) {
        var temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}


function calculateGCDOfThreeNumbers(a, b, c) {
    return calculateGCD(calculateGCD(a, b), c);
}

