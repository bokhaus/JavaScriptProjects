//'John' Object Literal
/*
 let john = {
    name: 'John',
    yearOfBirth: 1972,
    job: 'teacher',
};
*/
/*
// Function Constructor Pattern - always starts with a capital letter
let Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

//Inheritance by prototype property
Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}

// Add an element to prototype
Person.prototype.lastName = 'Bok';
//Instantiation of constructor object
let brian = new Person('Brian', 1972, 'web designer');
console.log(brian.yearOfBirth);
brian.calculateAge();//Through inheritance
console.log(brian.job);


let tanya = new Person('Tanya', 1973, 'teacher');
console.log(tanya.yearOfBirth);
tanya.calculateAge();//Through inheritance
console.log(tanya.job);

let elijah = new Person('Elijah', 2000, 'engineer');
console.log(elijah.yearOfBirth);
elijah.calculateAge(); //Through inheritance
console.log(elijah.job);

console.log(brian.lastName, tanya.lastName, elijah.lastName);
*/

/*

// Cool exercise to do in the inspection tool of the browser
let x = [2,4,6]
console,info(x)

// Look at all functions related to Array that may be used. (Stored in the Prototype)


*/

/*
// Object.create (Different way than above)
let personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }

}

let brian = Object.create(personProto); //Creates an empty brian object
// type brian in console and inspect the object (empty).


//Add data to the brian object (not efficient)
brian.name = 'Brian';
brian.yearOfBirth = 1972;
brian.job = 'web designer';

// type brian in console and inspect the object. (will have populated the data into the object)

//Add data to tanya object (best practice)
let tanya = Object.create(personProto, {
    name: {value: 'Tanya'},
    yearOfBirth: {value: 1973},
    job: {value: 'teacher'},
});


// ** Difference betweem Object.create and the Function Constructor pattern is that Object.create 
// ** builds an object which inherits directly from the first arguement. While in the Function Constructor, 
// ** the newly created object inherits from the prototype property. 
// ** Object.create allows us to create very complex inheritance structures in an easier way because it 
// ** allows us to directly specify  which object should be a prototype.
// ** Most popular way isd the Function Constructor **

*/

/*
// Primitives vs Objects //
//Primitives are: numbers, strings, booleans, undefined and null
//Objects are everything else
// variables for Primitives hold the data inside the variable
// variables for Objects hold a reference to the object in memory where it is stored


//Primitives//
// each primitive variable holds its own value
let a = 23;
let b = a;
a = 46;
console.log(a, b);

//Objects//
//Similar example to primitives
let object1 = {
    name: 'Brian',
    age: 48,
};

// A new variable wasn't created here. All that was created was a new reference to the object in memory
// Therefore, the age is the same because it referenced the exact same object.
let object2 = object1;
object1.age = 38;
console.log(object1.age, object2.age);

//Primitive / Objects  => Function
let age = 48;
let obj = {
    name: 'Brian',
    city: 'Holgate',
};

//mutate the data in the variables
function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

console.log('Before mutation: ' + age + ' and ' + obj.city);
change(age, obj); // call the function

//when a primitive is passed, it only makes a copy and doesn't replace it
// but when an object reference is passed it allows mutation.
console.log('After mutation: ' + age + ' and  ' + obj.city); 


//Functions as Objects (First Class Functions)//
//Passing functions as arguments//

let years = [1990, 1972, 1973, 2000, 2019];

// using a callback function
function arrayCalc(arr, fn){
    let arrResult = [];

    //Loops through years array, passes each year into the function and returns the age to the new array
    for (i=0; i<arr.length; i++){ 
        arrResult.push(fn(arr[i])); //Uses calcAge(); to calculate age and puts into new array
    }
    return arrResult;
}

function calculateAge(el){//el - generic for element
    return 2020 - el;
}


function isFullAge(el){ //el - generic for element
    return el >= 18;
}

//Use Cases (Allows for modular code creation)
console.log('Birth years: ', years);

// Passes an array and a callback function into the arrayCalc function
let ages = arrayCalc(years, calculateAge); //when calling callback function, don't use ()
console.log('Current ages: ', ages);

let fullAges = arrayCalc(ages, isFullAge);//when calling callback function, don't use ()
console.log('Legal age: ', fullAges);

//Calculate Max heart rate based on age
function maxHeartRate(el){
    if (el >= 18 && el <= 81){ //formula only valid for 18 to 81 year olds
        return Math.round (206.9 - (0.67 * el));
    } else {
        return -1; //If outside of the age range, return -1
    }
}

let maxHeart = arrayCalc(ages, maxHeartRate);//when calling callback function, don't use ()
console.log('Max heart rate based on age', maxHeart);
*/

/*
//Functions returning functions
function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){ //anonymous function (no name)
            console.log(name + ' , can you please explain what a UI is?');
        }
    } else if (job === 'teacher') {
        return function(name){
            console.log(name + " , what subject do you teach?");
        }
    }else {
        return function(name){
            console.log('Hello '+ name + '. What do you do?');
        }
    }
}

let teacherQuestion = interviewQuestions('teacher');
teacherQuestion('Tanya');

let designerQuestion = interviewQuestions('designer');
designerQuestion('Brian');

//Can Also do it a different way//
interviewQuestions('teacher')('Tanya');

interviewQuestions('engineer')('Elijah');

*/

/*
//Immediately Invoked Function Expressions (IIFE)//
//Normal way of doing functions
function game(){
    let score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//Do example using IIFE
//This is treated as an expression and not a declaration
// Creates data privacy //Not reusable.
(function() {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

//Pass good luck into the function //Only can be called once.
let goodLuck = 5;

(function(luck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - luck);
})(goodLuck); // Pass argument into IIFE function // could also pass the number.


//Closures//
// An inner function always has access to the variables and parameters of its outer
// function, even after the outer function has returned. 
function retirement(retirementAge){
    let a = ' years left until retirement.';
    return function(yearOfBirth){
        let age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUSA = retirement(65);
retirementUSA(1972);

let retiremenGermany = retirement(67);
retiremenGermany(1990);

let retirementFrance = retirement(50);
retirementFrance(1985);

//OR//
retirement(65)(1973); //Quicker way to pass data with less lines of code.
*/

//Rewrite using closure
/*
function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){ //anonymous function (no name)
            console.log(name + ' , can you please explain what a UI is?');
        }
    } else if (job === 'teacher') {
        return function(name){
            console.log(name + " , what subject do you teach?");
        }
    }else {
        return function(name){
            console.log('Hello '+ name + '. What do you do?');
        }
    }
}
*/
/*
//Re-written with closure //Cleaner code//
//Writing the function this way uses only one function to accomplish what the previous did in three/ 
function interviewQuestion(job){
    return function(name){
        if(job == 'designer'){
            console.log(name + ' , can you please explain what a UI is?');

        } else if (job === 'teacher') {
            console.log(name + " , what subject do you teach?");

        }else{
            console.log('Hello '+ name + '. What do you do?');
        }
    }
}

interviewQuestion('teacher')('Tanya');
*/

/*
//Bind, Call and Apply//
//Object 1
let brian = {
    name: 'Brian',
    age: 48,
    job: 'designer',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + '. I\'m a ' +
            this.job + '. I\'m ' + this.age + ' years old.');
        } else if (style ==='friendly'){
            console.log('Hey what\'s up ?' + ' I\'m ' + this.name + '. I\'m a ' + this.job + '. I\'m ' + this.age + 
            ' years old.' + ' Have a nice ' + timeOfDay);
        }
    }
};

//Object 2
let tanya = {
    name: 'Tanya',
    age: 47,
    job: 'teacher',
};


// These methods set the (this.) variable explicitly 
brian.presentation('formal', 'morning');

//To use for tanya object must use the call method  (** Method borrowing)
brian.presentation.call(tanya, 'friendly', 'afternoon');

//Apply Method //Receives uses an array
brian.presentation.apply(tanya, ['friendly', 'afternoon']);

//Bind Method (Doesn't Immediately call the function but generates a copy of the function to call it later)
//Allows the use of pre-set arguments
let brianFriendly = brian.presentation.bind(brian, 'friendly');

//Currying (technic to preset parameters using one function for another)
//function for morning
brianFriendly('morning');

//function for evening
brianFriendly('night');

let tanyaFormal = brian.presentation.bind(tanya, 'formal');
tanyaFormal('morning');



//Real world Example//
let years = [1990, 1972, 1973, 2000, 1999];

// using a callback function
function arrayCalc(arr, fn){
    let arrResult = [];

    //Loops through years array, passes each year into the function and returns the age to the new array
    for (i=0; i<arr.length; i++){ 
        arrResult.push(fn(arr[i])); //Uses calcAge(); to calculate age and puts into new array
    }
    return arrResult;
}

function calculateAge(el){//el - generic for element
    return 2020 - el; 
}


function isFullAge(limit, el){ //el - generic for element
    return el >= limit;//boolean true/false
}

let age = arrayCalc(years, calculateAge);

//Show the array to verify ages are correct
console.log(age);

//This example uses the array years passed into the arrayCalc function and binds them to the fullJapan function
//Use BIND to create a copy of a function with preset parameters
let fullJapan = arrayCalc(age, isFullAge.bind(this, 20)); //determines the legal age for Japan using bind
console.log('Legal Age for Japan: ' + fullJapan);

let fullUSA = arrayCalc(age, isFullAge.bind(this, 21));
console.log('Legal Age for USA: ' + fullUSA);
*/


/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
//Immediately Invoked Function Expressions (IIFE)//
//Code would be a plugin// Keep code private!!! (IIFE)
(function() {
    
    //Create Question function Constructor
    let Question = function (randomQuestion, answer, correct){
        this.randomQuestion = randomQuestion;
        this.answer = answer; //Array of possible answers
        this.correct = correct;
        //this.score = score;
    }


    // Build prototypes
    //Display question and answer
    Question.prototype.createQuestion = function(){
        console.log(this.randomQuestion);

        for (i=0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]); //calls the index of the questions and prints them along with the possible answers,
        }
    }

    //Validation of the answwer
    Question.prototype.checkAnswer = function(ans) { //user selected answer
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')

        }
    }

    
    //Create questions// Create questions using the new constructor
    let quest1 = new Question('What year was Brian born? ', [1969, 1972, 1990], 1);
    let quest2 = new Question('What does best describe coding? ', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
    let quest3 = new Question('What color is the sky? ', ['blue', 'green', 'purple', 'yellow'], 0);
    // console.log(quest1.randomQuestion);
    // console.log(quest2.randomQuestion);
    // console.log(quest3.randomQuestion);

    //Build question array
    let totalQuestions = [quest1, quest2, quest3];
    // Random Generator for question and select question.
    let qMath = Math.floor(Math.random() * totalQuestions.length);
    //console.log(qMath);

    //Select random question and display it in the console.
    totalQuestions[qMath].createQuestion();

    // Use 'prompt' function and ask user qestion with a dialog box
    let answer = parseInt(prompt('Please select the correct answer.'));

    //Check if the answer is correct
    totalQuestions[qMath].checkAnswer(answer);

})();

*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game 
if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you 
feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function() {
    function Question(question, answers, correct) { //What makes up a question
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    //Create questions// Create questions using the new constructor
    let quest1 = new Question('What year was Brian born? ', [1969, 1972, 1990], 1);
    let quest2 = new Question('What does best describe coding? ', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
    let quest3 = new Question('What color is the sky? ', ['blue', 'green', 'purple', 'yellow'], 0);

    //all questions in an array
    let questions = [quest1, quest2, quest3];

    //Calculate final score
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    //Variable for score
    let keepScore = score();
    
    //Continue game by asking next question
    function nextQuestion() {

        let qMath = Math.floor(Math.random() * questions.length);
        questions[qMath].displayQuestion();

        let answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[qMath].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();