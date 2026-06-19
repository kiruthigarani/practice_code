const a = "anagrams";
const search_str = "a";

let count = 0;
for (let i = 0; i < a.length; i++) {
   
    let index = a.indexOf(search_str, i);
    console.log("index:", index);
    if (index !== -1) {
        count++;
    }
    let output = {letter : search_str, count: count};
    console.log(output);
}