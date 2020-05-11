/*Module Pattern - Independent of each other - Separation of Concerns
* Create an anonymous functions 
* IIFE functions to protect data privacy
*/

//BUDGET CONTROLLER - Model
let budgetController = (function(){

    //Data Model for Income and Expenses
    //Function Constructors for Custome Data Types
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Data structure to recieve information from the user 
    let allExpenses = [];
    let allIncomes = [];
    let totalexpenses = 0;

    //Data object for all data
    let data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        }
    };
    //Public function to return the info from the data structure
    return {
        addItem: function(type, desc, val) {

            let newItem, ID;

            //When the array is empty, it should = 0
            if(data.allItems[type].length > 0){

                /* Create New ID
                *  ID is equal to the (type - 'inc' or 'exp') pulled from the data object
                *  data.allItems[type]
                *  The last id in the array of the [type] is selected.
                *  [data.allItems[type].length-1].id
                *  The next id will be the last id plus 1.
                *  **EXAMPLE**
                *  [1 2 3 4 5], next ID = 6
                *  [1 2 4 6 8], next ID = 9
                *  ID = last ID + 1 
                *  since the array is zero index and
                *  there are 5 elements in the array
                *  we want the last element of the array.
                *  element would then be 5-1 which is index[4]
                *  OR, (5-1 = [4]) + 1 => NEW ID 
                */ 
                ID = data.allItems[type][data.allItems[type].length-1].id + 1;

            }else {
                ID = 0;
            }
            

            //Create New Item based on 'inc' or 'exp' type
            if(type === 'exp') {
               newItem = new Expense(ID, desc, val);
            } else  if (type === 'inc'){
                newItem = new Income(ID, desc, val);
            }

            // Push the new Item into the data structure
            data.allItems[type].push(newItem);

            //Return the new item/element
            return newItem;
        },
        testing: function(){ //Method for testing data structure
            console.log(data);
        }
    };

})();



//UI CONTROLLER - View
let UIController = (function(){

    //Object for DOM values // Centralized
    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        
    }

    //Create an object with three properties
    //Private Function
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value, //User input description
                value: document.querySelector(DOMStrings.inputValue).value // Value for item
            };
        },

        addListItem: function(obj, type){
            //1. Create HTML string with placeholder text
            let html, newHtml, element;

            //Use placeholders to represent variable to insert (%id%, %description%, %value%)
            if(type === 'inc'){

                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%">' + 
                '<div class="item__description">%description%</div>' +
                '<div class="right clearfix"><div class="item__value">%value%</div>' +
                '<div class="item__delete"><button class="item__delete--btn">' + 
                '<i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp'){

                element = DOMStrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%">' + 
                '<div class="item__description">%description%</div>' +
                '<div class="right clearfix"><div class="item__value">%value%</div>' + 
                '<div class="item__percentage">21%</div><div class="item__delete">' +
                '<button class="item__delete--btn"><i class="ion-ios-close-outline">' +
                '</i></button></div></div></div>';

            }

            
            //2. Replace placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //3. Insert the HTML into the DOM
            //Inserted as a child in the specified container as the last item in the list.
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        //Make DOMStrings Public
        getDomStrings: function(){
            return DOMStrings;
        }
    };

})();



//This module connects the budgetController and the UI Module
//APP CONTROLLER - Controller
let controller = (function(budgetCtrl, UICtrl){

    //Private Function
    let setupEventListeners = function(){ //calls all event listeners in one centralized place.

        let DOM = UICtrl.getDomStrings(); //Call DOMStrings 

        //Calls DOM variable with the class for the event listener
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); //Uses ctrlAddItem function as a callback

        //Add key press 'ENTER' at the global level so it may be used for all buttons
        document.addEventListener('keypress', function(event){ //pass parameter to function
            
            //'Enter' Event listener  
            if(event.keyCode === 13){
                
                ctrlAddItem(); //locks in data to be selected//see function above
            }

        });
    };

    //Private Function
    //Control Center of the Application.
    let ctrlAddItem = function() {

        //Declare the variables
        let  input, newItem;

        //Custom functions to complete tasks

        // 1. Get field input data
        // This is created by returning the getInput method in the UI controller
        input = UICtrl.getInput();
        console.log(input); //**Remove at deployment**

        // 2. Add item to the budget controller
        // These items are gotten from the UIController getInput()
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add new item to the user UI
        UICtrl.addListItem(newItem, input.type);


        // 4. Calculate the budget
        // 5. Display the budget in the UI  

    };
    return{
        init: function(){ //Public initialization function to start the program.
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);


//Public Initialization function call
controller.init();

