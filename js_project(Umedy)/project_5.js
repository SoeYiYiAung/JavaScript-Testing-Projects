var x=8,i;
for (i=0; i<x; i++)
{
  console.log(i);
}

console.log("hello welcome to the app");
pass=prompt("please create a password");
console.log("Your password is created. Thank you!");

passtry = prompt("Please enter your password");
while (passtry != pass) {
  passtry=prompt("Wrong password. Try again!");
}
