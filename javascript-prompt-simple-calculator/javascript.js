var first = parseInt(window.prompt("First Integer"));
var second = parseInt(window.prompt("Second Integer"));
var operator = window.prompt("Operator");
if(operator == "+"){
    var result = (first + second);
}else if(operator == "-"){
    var result = (first - second);
}else if(operator == "*"){
    var result = (first * second);
}else if(operator == "%"){
    var result = (first % second);
}else if(operator == "**"){
    var result = (first ** second);
}
document.getElementById("islemSonuc").innerHTML="First Integer : "+first+" <br> Second Integer :"+second+" <br>Operator : "+operator+" <br>Result : "+result;