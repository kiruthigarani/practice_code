// Function to find the largest element in the array
function findLargestElement(arr, n) {
    let max = arr[0];  // Initialize max with the first element in the array


    // Iterate through the array to find the maximum element
    for (let i = 1; i < n; i++) {
        if (arr[i] > max) {  // If the current element is greater than max, update max
            max = arr[i];
          
        }
    }
  
    return max;  // Return the largest element found
}


    let arr1 = [2, 5, 1, 3, 0];
    let n = arr1.length;  // Size of the array
    let max = findLargestElement(arr1, n); 
    console.log("The largest element in the array is:", max);  


for (i=0;i<n;i++){
for(j=0;j<n-i-1;j++){
    if(arr1[j] > arr1[j+1]){
        let temp = arr1[j];
        arr1[j] = arr1[j+1];
        arr1[j+1] = temp;
    }
}
}
console.log("sorted:",arr1);