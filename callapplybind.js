const userDetail1 = {
    name : "kiruthiga",
    age : 25,
    printInfo : function(){
        console.log("Name:", this.name + "-" + "Age:", this.age );

    }
}

const userDetail2 = {
    name : "rani",
    age:44
}

userDetail1.printInfo.call(userDetail2);

