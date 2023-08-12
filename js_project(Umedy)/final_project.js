//run at google chrome console
console.log("Hello welcome to the food app!");
console.log("let's create an account!");
var username=prompt("please create a user name!");
var password=prompt("please create a password!");
console.log("Thank you. Your account has been created!");

console.log("Please enter your login information!");
var tryuser=prompt("Username : ");
var trypass=prompt("Password : ");

while (username!=tryuser && password!=trypass) {
  console.log("Wrong username and password.try again!");
  var tryuser=prompt("Username : ");
  var trypass=prompt("Password : ");
}
console.log("You are connected!");

var balance= 10;
console.log("Your current balance is "+balance+" $");
var q1=prompt("Would you like money to your account?");
if (q1 == "yes")
{
  var q2=prompt("How much would you like to add?");
  balance = balance + Number(q2);
  console.log("Your new balance is "+balance+" $.");
}
else {
  console.log("great!");
}

q4=prompt("Would you like a burger?");
if(q4 == "yes")
{
  console.log("Please choose what burger you want-> ");
  var burgertypes =["cheese burger","fish burger","all dress burger"];
  var prices=[2,3,4];

  console.log("choice 1: "+burgertypes[0]+ " " +prices[0]+ "$.");
  console.log("choice 2: "+burgertypes[1]+ " " +prices[1]+ "$.");
  console.log("choice 3: "+burgertypes[2]+ " " +prices[2]+ "$.");

   var q5= prompt("What is your choice?");
   if (q5=="choice 1")
   {
     console.log("You have ordered a "+burgertypes[0] );
     console.log("The total of the order is "+prices[0]+ " $.");
     var balance= balance-prices[0];
     console.log("You have "+balance+" $ left on your balance!");
   }
   else if (q5=="choice 2")
   {
     console.log("You have ordered a "+burgertypes[1] );
     console.log("The total of the order is "+prices[1]+ " $.");
     var balance= balance-prices[1];
     console.log("You have "+balance+" $ left on your balance!");
   }
   else if (q5=="choice 3")
   {
     console.log("You have ordered a "+burgertypes[2] );
     console.log("The total of the order is "+prices[2]+ " $.");
     var balance= balance-prices[2];
     console.log("You have "+balance+" $ left on your balance!");
   }
   else {
     console.log("Have a good day! Thank you!");
   }

}
