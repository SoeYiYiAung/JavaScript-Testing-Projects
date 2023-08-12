function add(a,b){
    var sum=a+b;
    console.log(sum);
}
var addResult=add(10,5);
console.log(addResult);

var addFunc= function (a,b){
    return a+b;
};
console.log(addFunc(5,10));

(function(a,b){
    console.log(a+b);
})(10,5);