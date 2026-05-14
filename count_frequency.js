// let arr = [1,2,2,3,2,1];

// for(let i=0;i < arr.length;i++){
//     let count = 0;
//     for(let j=0; j < arr.length;j++){
//         if(arr[i] === arr[j]){
//             count++;
//         }
//     }
//     console.log(arr[i] + ": " + count);
// }



const arr1 = [1, 2, 2, 3, 1, 2];

const freq = {};
console.log("freq:", freq);
for (let i = 0; i < arr1.length; i++) {

    const num = arr1[i];

    if (freq[num]) {       
        freq[num]++;
         console.log("if:", num, freq[num]);
    } else {
        freq[num] = 1;
          console.log("else:", num, freq[num]);
    }
}

console.log(freq);

const person = {};
console.log(person);
person["name"] = 'kiki';
person["age"] = 25;

console.log(person);