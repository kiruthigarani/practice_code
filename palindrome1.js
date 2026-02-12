let num = 1234321;
let number1 = num;
let rem =0;
while(num > 0){
    rem = (rem * 10) + num % 10;
    console.log(rem);
    num = Math.floor(num / 10); 
}

console.log("reverse string",rem);

if(number1 === rem){
    console.log("the num is Palindrome");
}else{
   console.log("the num is not Palindrome");
}


