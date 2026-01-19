let i = 10;

function outerFunction() {
    let i = 20; 
    console.log("Value of i:", i); // here the value of 'i' will be 20
}
outerFunction(); 
 console.log("Now Value of i:", i); // here the value of 'i' will be 10


