var a = parseInt(prompt("Enter the first number:"));
var b = parseInt(prompt("Enter the second number:"));
var c = parseInt(prompt("Enter the third  number:"));
for (var i=1;i<=a*b*c;i++){
    if(i%a==0 && i%b==0 && i%c){
        break;
    }
}
document.write("LCM=  " + i);

