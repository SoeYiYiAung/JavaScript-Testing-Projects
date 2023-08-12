console.log("let's create a sentence");
var c1=prompt ("Please write down a name");
var c2=prompt("write down a color");
function sentence(name,color)
{
  console.log("hello my name is "+name+" and I love "+color+ " color");
}
sentence(c1,c2);

console.log("let's make an operation");
var q3=prompt("please write a number");
var q4=prompt("please write another number");
function operation(num1,num2){

  console.log("Multiplication of numbers "+ num1*num2);
  console.log("Division of numbers "+ num1/num2);
  //console.log("Addition of numbers "+ num1+num2);
  //console.log("Substraction of numbers "+ num1-num2);
}
operation(q3,q4);

function both(name,color,num1,num2) {
  console.log("The selected name is "+name);
  console.log("The selected color is "+color);
  console.log("The selected numbers are "+num1 +" and " +num2);
}
both(c1,c2,q1,q2);
