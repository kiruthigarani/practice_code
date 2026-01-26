/*
* print 
* * * *
* * * *
* * * *
* * * *
*/

for(let i = 0; i<4; i++){
    let row = '';
    for(let j=0; j<4; j++){
        row += '* ';
       
    }
       
    // To display in HTML, add this div to your HTML file:
    // <div id="pattern1"></div>
    // console.log("Row value:",row);
    // console.log("<br>");
    let element = document.getElementById("pattern1");
    if(element) {
        element.innerHTML += row + '<br>';
    }
}