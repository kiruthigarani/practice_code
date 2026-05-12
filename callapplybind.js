const userDetail1 = {
    name : "kiruthiga",
    age : 25,
    printInfo : function(city,pincode){
        console.log("Name:", this.name + "-" + "Age:", this.age + "-" + "City:", city + "-" + "Pincode:", pincode);

    }
}

const userDetail2 = {
    name : "rani",
    age:44
}

userDetail1.printInfo.call(userDetail2, "madurai", 625019);

