const list = [1,2,3,4,3,2,1,1,2,3,4,5];

//indexOf method returns the index of the first occurrence of the element in the array
//indexOf will search from the start of the array by default
//we can give the second parameter to indexOf method to start searching from that index
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


//remove duplicate
const array1 =[
    {name:"cap1",rollnumber:1},
    {name:"cap2",rollnumber:2},
    {name:"cap1",rollnumber:"1"} 
] ;
const uniqueIds = [];
const array2 = array1.filter((element)=>{

    const unique = uniqueIds.includes(element.name );
    if(!unique){
        return uniqueIds.push(element.name );
        //return true;
    }
    return false;
});
console.log("unique:",array2);