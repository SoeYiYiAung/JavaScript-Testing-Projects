for(var i=0; i<10;i++){
    console.log(i);

}
var i=0;
while(i<10)
{
    console.log(i);
    i++;
}
var i=0;
var sum=0;
while(true){
    console.log(i);
    sum+=i;
    if (sum>=200){
        break;
    }
    i++;
}
console.log(sum);

for(var i=0; i<100;i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);
}