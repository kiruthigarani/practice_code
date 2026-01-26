/*
* print 
* * * *
* * * *
* * * *
* * * *
*/

// for(let i = 0; i<4; i++){
//     let row = '';
//     for(let j=0; j<4; j++){
//         row += '* ';
       
//     }
       
//     // To display in HTML, add this div to your HTML file:
//     // <div id="pattern1"></div>
//     // console.log("Row value:",row);
//     // console.log("<br>");
//     let element = document.getElementById("pattern1");
//     if(element) {
//         element.innerHTML += row + '<br>';
//     }
// }

/*
* print 
* 
* * 
* * * 
* * * *
*/
// for(let i = 0; i<4; i++){
//     let row = '';
//     for(let j=0; j<i+1; j++){
//         row += '* ';
       
//     }
       
//     let element = document.getElementById("pattern1");
//     if(element) {
//         element.innerHTML += row + '<br>';
//     }
// }

/*
* print 
1
1 2
1 2 3
1 2 3 4
*/
// for(let i = 1; i<=4; i++){
//     let row = '';
    
//     for(let j=1; j<i+1; j++){
     
//         row += j;
//         row += '\t';
       
//     }
   
//     let element = document.getElementById("pattern1");
//     if(element) {
//         element.innerHTML += row + '<br>';
//     }
// }


/*
* print 
* * * * *
* * * *
* * *
* *
*
*/
n=5;
for(let i=1; i <=n; i++){
    let row ='';
    for(let j=0;j< n-i+1; j++)
    { 
        row +='*';
    }

    let element = document.getElementById("pattern1");
    if(element){
        element.innerHTML += row + "</br>";
    }
}

/*
* print 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

n=5;
for(let i=1; i <=n; i++){
    let row = '';
    for(let j=1;j<=i; j++)
    { 
        row +=i;
    }

    let element = document.getElementById("pattern1");
    if(element){
        element.innerHTML += row + "</br>";
    }
}

