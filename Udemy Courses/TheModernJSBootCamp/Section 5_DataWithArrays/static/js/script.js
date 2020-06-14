/*
Arrays 
*/

//Create Arrays
let students = []; //Empty array

let colors = ['red', 'orange', 'yellow']; //Array of strings

let lottoNums = [19,22,34,45,65,12]; //Number array

let myStuff = [true, 68, 'cat', null]; //Mixed array

let nums = new Array(1,2,3,4,5); //creates a new array but less common
console.log('===============Modifying Arrays=======================')

//Accessing Information outside of Arrays
console.log(colors.length); //numbeof items in the array
console.log(colors[0]); //first element of colors
console.log(colors[1]); //second element of colors

//Modifying Arrays
let shoppingList = ['Cheddar Cheese', '2% Milk'];
console.log(shoppingList);

//Less used way to modify an array - must know last index
shoppingList[1] = 'Whole milk'; //Changes item in an array
shoppingList[2] = 'Ice Cream'; //Adds item to the array
console.log(shoppingList);

//Still a CLUNKY way
shoppingList[shoppingList.length] = 'Tomatoes'; //Adds item to the end of array
console.log(shoppingList);

shoppingList[shoppingList.length] = 'Potatoes';
console.log(shoppingList);
console.log('');

console.log('===================Push - Pop at end of the array===================')
//Push - Pop at end of the array **Most Common over shift/unshift
let topSongs = [
    'First Song',
    'Second Song',
    'Third Song',
    'Fourth Song',
    'Fifth Sonmg'
];

console.log(topSongs);
topSongs.push('Fortunate Son'); //Adds to end of the array
topSongs.push("Paint it Black"); //Continues to add to end of the array

console.log(topSongs);

console.log(topSongs.pop()); //removes the last item in the array and returns the item
console.log(topSongs);
console.log('');

console.log('==================Shift and Unshift at the beginning====================')
//Shift and Unshift at the beginning of the array in the order that it is done

//Shift
let dishesToDo = ['big platter'];
console.log(dishesToDo);
dishesToDo.unshift('large plate') //Adds to beginning of the array
console.log(dishesToDo);
dishesToDo.unshift('small plate'); //Adds to beginning of the array
console.log(dishesToDo); 
dishesToDo.unshift('mug'); //Adds to the beginning of the array
console.log(dishesToDo);

//***Can be done with Push as well***
dishesToDo.unshift('saucer', 'spoon'); //Adds in the order within the parens (Chunk)
console.log(dishesToDo);

//Shift
console.log(dishesToDo.shift()); //Removes 'saucer' the first item in the array
console.log(dishesToDo.shift()); //Removes 'spoon' the second item in the array

console.log('');
console.log('==================Concat Arrays====================')
// Creates a new array combining two arrays
let fruits = ['apples', 'banana', 'peaches'];
let veggies = ['carrots', 'peas'];
let meats = ['steak', 'chicken breasts'];

let newFruitVeg = fruits.concat(veggies); //Combines the two arrays
console.log(newFruitVeg);

let newVegFruit = veggies.concat(fruits);
console.log(newVegFruit);

//Combines 3 arrays -> unlimited amount arrays may be combined
let allFoods = fruits.concat(veggies, meats); 
console.log(allFoods);

console.log('');
console.log('==================Includes and IndexOf===================')
//Includes and IndexOf

//Includes //Boolean method
fruits.includes('cherries'); //Does the array include?
console.log(fruits.includes('cherries')); //Returns a false since cherries are not in the list
console.log(fruits.includes('apples')); //Returns true since apples are in the array

//Another Option in the method is a starting point
// fruits.includes('apples', 0); //Starts searching at index 0

if (fruits.includes('apples')){ //Boolean method do not need to test with ===
    console.log('There are apples in this array');
}

//IndeOf
console.log(fruits.indexOf('apples')); //Returns the idex of the element if present

//Returns the idex of the element - Returns -1 because it's not present in the array
console.log(fruits.indexOf('cherries')); 

//Another Option in the method is a starting point
// fruits.IndexOf('apples', 0); //Starts searching at index 0

console.log('');
console.log('==================Reverse and Join====================')

let letters = ['R', 'E', 'S', 'P', 'E', 'C', 'T'];

//Reverse
console.log(letters, 'Un-Modified Array');
console.log(letters.reverse(), 'Reversed Array'); //Reverses content of the Array

//Join -> joins all elements into a single string
letters.reverse(); //Reverses the Array back to original

let joinLetters = letters.join();
console.log(joinLetters); //default join is a comma R,E,S,P,E,C,T

joinLetters = letters.join('');
console.log(joinLetters); //Joins on NO space RESPECT

joinLetters = letters.join('.'); //joins and uses . between R.E.S.P.E.C.T
console.log(joinLetters); 

joinLetters = letters.join('-'); //Joins using - between  R-E-S-P-E-C-T
console.log(joinLetters);

//If joing unrelated types, the join will be a string
let unrelatedData = [12.3, 'test', 'brian', true];
let joinedUnrelated = unrelatedData.join(' #-> ');//Joins with ' #-> '
console.log(joinedUnrelated);

console.log('');
console.log('==================Slice====================')
let animals = ['dog', 'cat', 'bear', 'lizard', 'turtle'];

//Slice -> Does not modify the array but forms a new arrray
let housePets = animals.slice(0, 2);//takes first two from the array
console.log(housePets);

let reptiles = animals.slice(3, 5); //must go one past
console.log(reptiles);

let reptilesTwo = animals.slice(3, animals.length); //Or use length
console.log(reptilesTwo); 

console.log('');
console.log('==================Sort Arrays====================')

//Built in method for modifying an array - PUSH and POP
let people = ['Robinson', 'Angie','Jolene', 'Maggie Mae', 'Roxanne'];
console.log(people.sort());













