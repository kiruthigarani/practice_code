const join_sample = ["monkey", "lion", "tiger"];
console.log(join_sample.join(" , ")); // Output: monkey , lion , tiger

const split_sample = "apple,banana,grape,orange";
const fruitsArray = split_sample.split(",");
console.log(fruitsArray); // Output: [ 'apple', 'banana', 'grape', 'orange' ]

const sentence = "Hello world! Welcome to the world of JavaScript.";
const wordsArray = sentence.split(" ");
console.log(wordsArray); // Output: [ 'Hello', 'world!', 'Welcome', 'to', 'the', 'world', 'of', 'JavaScript.' ] 

const string = "one,two,three,four,five";
const limitedSplit = string.split(",", 3);
console.log(limitedSplit); // Output: [ 'one', 'two', 'three' ] 

const str = "she is a good girl!she has a cat.";

const splitWithRegexp = str.split(/[!.]/);
console.log(splitWithRegexp);  //['she is a good girl', 'she has a cat', ''] empty string because ! and . are the seperator here, so split separates the string after . it considered after . no strings, empty means it returns ""




const str1 = "api.example.com, web.example.com;localhost|127.0.0.1";
const splitWithRegexp1 = str1.split(/[,;|]/);
console.log(splitWithRegexp1); //['api.example.com', ' web.example.com', 'localhost', '127.0.0.1']
