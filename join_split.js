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

//Flattening the array - converting the nested level of araay to single level array
//Example: [1, [2, [3]]] 
/*
*LEVEL 0 → [1, [2, [3]]]
*LEVEL 1 → [2, [3]]
*LEVEL 2 → [3]
*/
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]]];
const flattenedArray = nestedArray.flat(2); // 2 is the depth level to flatten
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

//flatten the array using recurrsion

function flattenArray(arr) {
  let output = [];
  arr.forEach((element) => {
    if(Array.isArray(element)) {
        //recursive call
         output = output.concat(flattenArray(element));
    }else{
        output.push(element);
    }
  });

//   for (let i = 0; i < arr.length; i++) {
//       if(Array.isArray(arr[i])) {
//            output.push(...flattenArray(arr[i]));
//       }else{
//           output.push(arr[i]);
//       }
//  }
  return output;
}
 console.log(flattenArray(nestedArray) + "Usinng  recurrsion");
