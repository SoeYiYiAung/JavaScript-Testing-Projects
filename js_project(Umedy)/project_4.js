console.log("Hello welcome to the shop");

var q1=prompt("would you like a coffee of a tea?");
if(q1=="coffee"){
  var q2=prompt("would you like cookies with your coffee?");
  if(q2=="yes"){
    console.log("you have ordered coffee and cookies!");
  }
  else if(q2!="yes"){
    console.log("you have only ordered coffee!");
  }
}

else if(q1="tea"){
  var q3=prompt("would you like cookies with your tea?");
  if(q3=="yes"){
    console.log("you have ordered tea and cookies!");
  }
  else if(q3!="yes"){
    console.log("you have only ordered tea!");
  }
}

else {
  console.log("Okay Have a good day!");
}
