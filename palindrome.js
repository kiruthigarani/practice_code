const text = "abba";

const length = (text.length)/2;
let isPalindrome = false;
for(let i =0; i < length; i++){
    if(text[i] === text[length-(i+1)]){
        isPalindrome = true;
    }else{
        isPalindrome = false;
    }
}

if(isPalindrome){
    console.log(`${text} is Palindrome`);
}else{
     console.log(`${text} is Palindrome`);
}


