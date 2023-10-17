var input="this is sunny day"
let temp="";
let rev=""
for (let index = 0; index < input.length; index++) {
if(input.charAt(index)==" ")
{
rev=rev+temp+input.charAt(index);
temp="";
}
else{
temp=input.charAt(index) +temp
}
}
rev=rev+temp;
console.log(rev)
