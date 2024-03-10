//Calculate Factorial
var number=prompt("Enter your number");
var fact=1;
if(number==0){
    alert("The factorial of 0 is 1");
}
else if(number < 0){
    alert("The factorial of -ve number is not possible");
}
else{
    for (var i =1; i<=number; i++){
        fact=fact*i 
        document.write(fact);
    }
 } 