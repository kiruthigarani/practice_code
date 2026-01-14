const list = [1,2,3,4,3,2,1,1,2,3,4,5];

//indexOf method returns the index of the first occurrence of the element in the array
const newList = list.filter((element,index)=>{
    console.log("Element:",element,"--","Index of element:",list.indexOf(element),"--","Current Index:",index)  ;
  return list.indexOf(element) === index
});

console.log(newList);

//alternative solution
const uniqueList = [...new Set(list)];
console.log("uniqueList:", uniqueList);

const str1 = "Hello world, welcome to the world.";
console.log(str1.indexOf("world")); // returns 6
console.log(str1.indexOf("World")); // returns -1, CASE SENSITIVE

//how to check the count of the substring exists in a string

const string = "Hello world, welcome to the world.";
const subStr = "world";
const count = (string, subStr) => {
    let count = 0;
    let pos = string.indexOf(subStr);
    while (pos !== -1) {
        count++;
        pos = string.indexOf(subStr, pos + 1);
    }
    return count;
};
const count_of_substring = count(string, subStr);
console.log(`The substring "${subStr}" occurs ${count_of_substring} times in the string.`);

const str = "Hello world, welcome to the world.";
console.log(str.indexOf("world", 10)); // RETURNS 28, STARTING SEARCH FROM INDEX 10