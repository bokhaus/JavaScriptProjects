//ES6 let and const are introduced in this section

/*
var variables are function scoped
let variables are block scoped
 */

//ES5
var name5 ='Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
// const name6 ='Jane Smith'; // declared a constant. unmutable
// let age6 =23;
// name6 = 'Jane Miller';
// console.log(name6);

//ES5
function drivesLicense5(passedTest){
    if(passedTest){
        var firstname = 'John';
        var yearOfBirth = 1990;
       
    }
    console.log(firstname + ', born in ' + yearOfBirth + 
    ', is officially allowed to drive a car.');
}

//ES6
drivesLicense6(true);

function drivesLicense6(passedTest){
    let firstname;
    //will not work when declared outside of the block then initialized inside of the block
    const yearOfBirth = 1990; 

    if(passedTest){
        firstname = 'John';
        yearOfBirth;
        
    }
    //Doesn't work because let and const are block scoped.
    //Only accessable by the code which is in the same block (between curly brackets)
    //OR declare them outside of the block.
    console.log(firstname + ', born in ' + yearOfBirth + 
    ', is officially allowed to drive a car.');
}

drivesLicense6(true);