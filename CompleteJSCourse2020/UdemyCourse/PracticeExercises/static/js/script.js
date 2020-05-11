/*
*****************CHALLENGE ONE *****************

//Body mass index calculation
//BMI = mass /(height*height) must be in kilograms and meters.
/*
let johnW = prompt('What is John\'s weight in pounds?');
let johnH = prompt('What is John\'s height in inches?');
let markW = prompt('What is Mark\'s weight in pounds?');
let markH = prompt('What is John\'s height in inches?');

//Calculate BMI
let johnBMI = (johnW * 0.453592) / ((johnH * 0.0254) * (johnH * 0.0254));
let markBMI = (markW * 0.453592) / ((markH * 0.0254) * (markH * 0.0254));
console.log('John has a BMI of ', johnBMI);
console.log('Mark has a BMI of ', markBMI);

if(johnBMI < markBMI) {
    console.log('Mark has a greater BMI');
}else if (markBMI < johnBMI){
    console.log('John has a greater BMI');
}else {
    console.log('They have equal BMI\'s');
}
*/

/* Ternary Operator and Switch 

//Ternary Operator
let firstname = 'John';
let age = 31;
let job = 'shop owner';

age >= 18 ? console.log(firstname + ' likes to drink beer.') : console.log(firstname + ' drinks juice');

let drink = age >= 18 ? ' beer.' : ' juice';
console.log(drink);

//Switch
switch(job){
    case 'teacher': // can use two cases for same output
    case 'instructor':
        console.log(firstname + ' is a teacher of website design.');
        break; //must use break or the switch will continue to evaluate
    case 'driver':
        console.log(firstname + ' drives an Uber around Lisbon');
        break;
    case 'shop owner':
        console.log(firstname + ' owns a pizza shop');
        break;
    default: //when there are no other options
        console.log(firstname + ' does something else.');
}


switch(true){
    case age < 13:
        console.log(firstname + ' is a boy');
        break;
    case age >= 13 && age <20:
        console.log(firstname + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstname + ' is a young man.');
        break;
    default:
        console.log(firstname + ' is a man.');
}

*/

/* Truthy and Falsy values and equality operators 

//falsy values: equate to false in an if statement- undefined, null, 0, '', NaN (not a number)
//truthy values: equate to true in an if statement - Not falsy values

let height;
height = 23; //defined variable
//height = 0; // defined but a falsy value

    if(height || height === 0){ // evaluates to false unless using an OR operator
        console.log(' The variable has been defined');
    }else {
        console.log(" the variable has NOT been defined");
    }

// Equality operator
    if (height == '23') {//converts to number and compares
        console.log(' The == operator does type coercion');
    } 

// *** BEST Practice to always use === ***
height = 23;
    if(height === '23') {//strict comparison. It MUST be the same. (i.e., string, number)
        console.log('This is === strict quality operator'); // this will never print because 23 and '23' are not the same
    }
*/

/*
*****************CHALLENGE TWO ****************
let johnsTeam = (97 + 137 + 105)/3;
let mikesTeam = (97 + 136 + 105)/3;
let marysTeam = (97 + 135 + 105)/3;
console.log('John ' + johnsTeam);
console.log('Mike ' + mikesTeam);
console.log('Mary ' + marysTeam);

if(johnsTeam < mikesTeam && mikesTeam < marysTeam){
    console.log('Mary\'s team has the highest average. ' + marysTeam);
}else if (johnsTeam < mikesTeam && marysTeam < mikesTeam){
    console.log('Mike\'s team has the highest average. ' + mikesTeam);
}else if(johnsTeam > mikesTeam && johnsTeam > marysTeam){
    console.log('Jonh\'s team has the highest average. ' + johnsTeam);
}else {
    console.log('They all tied.');
} //Correct Solution

*/

/*Functions
let birthYear = 1972;
let firstname = 'Brian';

//function returns something
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

let myAge = calculateAge(birthYear); 
let tanyaAge = calculateAge(1973); 
let elijahAge = calculateAge(2000); 
console.log(myAge, tanyaAge, elijahAge);

// functions do not have to return anything. 
function yearsUntilRetire(year, firstname) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    let yearRetire = 2020 + retirement;

    console.log(firstname + ' will retire in ' + yearRetire + ' at 65. \nWhich is in ' + retirement + ' years');
}

//calls function and uses declared variables to determine retirement.
yearsUntilRetire(birthYear, firstname);

/*Function Statements and  Expressions
//Statement
//function whatDoYouDo(job, firstname){}

//Expression - uses a variable 
let whatDoYouDo = function(job, firstname) {
    switch(job){
        case 'teacher': //do not need break statement since the case returns something.
            return firstname + ' teaches kids how to code';
        case 'driver':
            return firstname + ' is an Uber driver in Libon';
        case 'shop owner':
            return firstname + ' owns a pizza shop';
        default:
            return firstname + ' does something else'
    }
}

let job = 'driver';

console.log(whatDoYouDo(job, firstname));
console.log(whatDoYouDo('teacher', 'Tanya'));
console.log(whatDoYouDo('engineer', 'Elijah'));

*/

/*Arrays
//Two-ways to do arrays
//Initialized new array
let names = ['Brian', 'Tanya', 'Elijah', 'Jordan', 'Micah', 'Ruth', 'Sarah'];

let years = new Array(48, 47, 19, 18, 15, 13, 10);

console.log(names);
console.log(years);
console.log(names[0] + ' & ' + names[1] + ' are married.');
console.log(names.length);
console.log('Tanya and Brian have an average age of ' + ((years[0] + years[1])/2));

//Mutated array data
names[1] = 'Bubba'; // replaces Tanya with Bubba
names[8] = 'Mary'; // adds element but skips element because [7] wasn't chosen
names[names.length] = 'Susan'; //adds the element to the end of the array.
console.log(names);

//Arrays can hold different data types
let brian = ['Brian', 'Bok', 1972, 'designer', true]; //initialize an array called brian

//add data to array
brian.push('red'); //adds element to the end of the array

console.log(brian); //prints the updated array.

brian.unshift('Mr.'); //adds the updated info to the beginning of the array.
console.log(brian); //prints the updated array.

//remove data from the array
brian.pop(); //removes element from the end of the array - removed 'red'.
console.log(brian); //prints the updated array.

brian.shift(brian);//removes first element of the array - 'Mr.'
console.log(brian); //prints the updated array.

//return value of the index - indexOf
console.log(brian.indexOf(1972));

//if the element is not present int the array it will return -1.
console.log(brian.indexOf(300)); //useful for testing the array

//Using the Ternary Operator and indexOf 
//(same as an if-else statement [if index equals -1 not designer if it doesn't equal -1 IS a designer )
let job = brian.indexOf('designer') === -1 ? 'Brian is NOT a designer' : 'Brian IS a designer';
console.log(job);

*/

/*
*****************CHALLENGE THREE ****************
//tips = 20% if < $50, 15% between 50 and 200 and 10% if  200
// dinner costs = 124, 48, 268

let dinner = [48, 124, 268];
let dinnerOne = 48;
let dinnerTwo = 124;
let dinnerThree = 268;
let tip = new Array();
let totalCost = new Array();

function tipCalc(cost) {
    if (cost < 50) {
        let tipCalc = cost * .20;
        let totalBill = tipCalc + cost;
        totalCost.push(totalBill.toFixed(2));
        tip.push(tipCalc.toFixed(2));

    } else if (cost >= 50 && cost < 200) {
        let tipCalc = cost * .15;
        let totalBill = tipCalc + cost;
        totalCost.push(totalBill.toFixed(2));
        tip.push(tipCalc.toFixed(2));
        
    } else {
        let tipCalc = cost * .10;
        let totalBill = tipCalc + cost;
        totalCost.push(totalBill.toFixed(2));
        tip.push(tipCalc.toFixed(2));
    }
}

//Two different ways 
//Variables
tipCalc(dinnerOne);
tipCalc(dinnerTwo);
tipCalc(dinnerThree);

console.log('Tip amounts: ' + tip);
console.log('tips and bills: ' + totalCost);

//Second way of doing Challenege

function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .20;
    } else if ( bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}


//Calling the index of the array
let bills = [124, 48, 268];
let tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

console.log(tips);
*/

/*
*Objects and Properties


// Object literal
let john = {
    'firstName': 'John',
    lastName: 'Smith',
    birthYear: 1972,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,

};

//Retrieve data from Objects
console.log(john);
console.log(john.firstName); //prints value of the key firstname (dot Notation)
console.log(john['lastName']);//can also print this way [bracket notation]
console.log(john.lastName); //or this way

let x ='birthYear';// set key value to variable
console.log(john[x]); //print the key value 
console.log(john.birthYear); //print the key value confirm

//Mutate data in objects
john.job = 'designer';
john.isMarried = true;
console.log(john);

//Add new object syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/*
* Object Methods


let john = {
    'firstName': 'John',
    lastName: 'Smith',
    birthYear: 1972,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //calcAge: function(birthYear){ //[function expression] method of john (object)
        //return 2020 - birthYear;
    //},
    //calcAgeTwo: function(){ //[function expression] method of john (object)
        //return 2020 - this.birthYear; //uses the birthYear already defined in the object
    //},
    //adds age to (this object)
    calcAgeThree: function(){ //[function expression] method of john (object)
        this.age = 2020 - this.birthYear; //uses the birthYear already defined in the object and reserved word (this)
    }
};
//console.log(john);
//console.log(john.calcAge(1973)); //prints the object function

//access the calcAgeTwo function expression
//console.log(john.calcAgeTwo());

//sets a new key value element with the function
//john.age = john.calcAge(1973);
//console.log(john);

//john.age = john.calcAgeTwo();
//console.log(john);

john.calcAgeThree();
console.log(john);

*/

/*
****************CHALLENGE FOUR ****************


//BMI using Objects for each person and include a function to calculate the BMI
//Log to console the BMI for each person and inclued (full name and BMI)
//(weight * 0.453592) / ((height * 0.0254) * (height * 0.0254));

let mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    height: 69,
    weight: 195,
    calcBMI: function() { //calculate BMI for Mark and add it to the Object
            this.bmi = (this.weight * 0.453592) / ((this.height * 0.0254) * (this.height * 0.0254));
            return this.bmi;
    }
};

let john = {
    firstName: 'John',
    lastName: 'Jones',
    height: 68,
    weight: 195,
    calcBMI: function (){//calculate BMI for john and add it to the Object
        this.bmi = (this.weight * 0.453592) / ((this.height * 0.0254) * (this.height * 0.0254));
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

if(john.bmi < mark.bmi){
    console.log(mark.firstName + ' ' + mark.lastName + ' has a greater BMI of ' + mark.bmi);
}else if (mark.bmi < john.bmi){
    console.log(john.firstName + ' ' + john.lastName + ' has a greater BMI of ' + john.bmi);
}else{
    console.log('They have the same BMI of' + mark.bmi);
}

*/

/*
* Loops and Iteration
*/
/*
//FOR LOOP
//define variable to count, define the logic, increment)
for(i=0; i<=10; i++){
    console.log(i);
} 
// i=0, 0<10, log i to console, i++
// i=1, 1<10, log i to console, i++
// repeat until i=10...
// i=11, 11>10 loop stops
/*
//for loop using an array
let num = ['Brian', 'Tanya', 'Elijah', 'Jordan', 'Micah', 'Ruth', 'Sarah'];

for(i=0; i<num.length; i++){
    console.log(num[i]);
}

//WHILE LOOP
//set-up same way as for loop above but takes more lines of code to complete
let w = 0;
while(w < num.length){
    console.log(num[w]);
    w++;
}


//Continue and Break Statements

//continue
let num = ['Brian', 48, 'Tanya', true, 'Elijah', 'Jordan', 'Micah', 'Ruth', 'Sarah'];

//This for loop will skip printing the element if it is not a string
for(i=0; i<num.length; i++){
    if(typeof num[i] !== 'string') continue; //!== is strict not equal. 
    console.log(num[i]);
}

//Break
//This for loop will stop printing and exit when the element is not a string
for(i=0; i<num.length; i++){
    if(typeof num[i] !== 'string') break; //!== is strict not equal. 
    console.log(num[i]);
}

//Looping backwards
for(i= num.length-1; i>=0; i--){
    console.log(num[i]);
}
*/


/*
****************CHALLENGE FIVE ****************
* Create tip calculator - John [124, 48, 268, 180, 42]
* tips = 20% if < $50, 15% between 50 and 200 and 10% if  200
* Use objects and loops
* 1. Create an object with an array for the bill values
* 2. Add a method to calculate tip
* 3. This method should include a loop to iterate over a the paid bills
* and do tip calculation
* 4. Output - create 1) array containing all tips 2) an array containing final bill (tip + bill)
* Hint: Start with two empty arrays and fill themin the loop
* Mark [77, 375, 110, 45]
* 5. Implement the same functionality using tip rules 
* 6. Create a function to calculate the average of a given array of tips. Loop over the array 
* 7. calculate the average tip for each family
* 8. Log to the console which family paid the highest tip average


//John's trip
let john = {
    fullName: 'John Jones',
    dinner: [124, 48, 268, 180, 42],
    tips: [],
    totalCost: [],
    tipCalc: function (){
        
        for(i=0; i < this.dinner.length; i++){

            let dinnerBill = this.dinner[i];
            let tipPercentage;
            
            //Determine percentage based on tipping rules
            if (dinnerBill < 50) {
                tipPercentage = .20;
                
            } else if (dinnerBill >= 50 && dinnerBill < 200) {
                tipPercentage = .15;
            
            } else {
                tipPercentage = .10;
            }

            //Add results to the arrays
            this.tips[i] = (dinnerBill * tipPercentage);
            this.totalCost[i] = ((dinnerBill * tipPercentage) + dinnerBill);
            
        }
    }
};

let mark = {
    fullName: 'Mark Smith',
    dinner: [77, 375, 110, 45],
    tips: [],
    totalCost: [],
    tipCalc: function (){
        
        for(i=0; i < this.dinner.length; i++){

            let dinnerBill = this.dinner[i];
            let tipPercentage;
            
            //Determine percentage based on tipping rules
            if (dinnerBill < 100) {
                tipPercentage = .20;
                
            } else if (dinnerBill >= 50 && dinnerBill < 300) {
                tipPercentage = .10;
            
            } else {
                tipPercentage = .25;
            }

            //Add results to the arrays
            this.tips[i] = (dinnerBill * tipPercentage);
            this.totalCost[i] = ((dinnerBill * tipPercentage) + dinnerBill);
            
        }
    }
};

//Calculate the average tips
function caclAverage(tips){
    let sum = 0; //average starts at 0

    for(i=0; i < tips.length; i++){
       sum = sum + tips[i]; //calculates the average by adding each element to the previous sum.
    }
    return sum / tips.length; //takes the sum and divides it by the length of the array.

}


//Calculate Johns tips and bills - print to console
john.tipCalc();
//Calculate Marks tips and bills - print to console
mark.tipCalc();

//puts the tips average into the tripJohn object
john.average = caclAverage(john.tips);

//puts the tips average into the tripMark object
mark.average = caclAverage(mark.tips);

console.log(john, mark);

//determine which has higher average tips. (.toFixed(2) limits )
if(john.average > mark.average){
    console.log('John has a greater tip average with ' + john.average.toFixed(2));
}else if(john.average < mark.average){
    console.log('Mark has a greater tip average with ' + mark.average.toFixed(2));
}else{
    console.log('The have the same tip average with ' + mark.average.toFixed(2));
}

*/

/*SECTION Three - How JavaScript works behind the scenes*/












































