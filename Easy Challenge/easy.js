// created two variables with names //
const nameOne = "Helen";
const nameTwo = "Thomasine";
// Used this to determin if the const variables was working in the console
// console.log (nameTwo);


const nameLength = function (nameOne, nameTwo) {
    if (nameOne.length < nameTwo.length){
        console.log(nameOne + " " + "is " + " " + "shorter" + " " + "than" + " " + nameTwo);}

    else if (nameOne > nameTwo) {
    console.log(nameOne + " " + "is " + " " + "longer" + " " + "than" + " " + nameTwo);}

    else {
    console.log ("null");}
}

nameLength(nameOne, nameTwo);