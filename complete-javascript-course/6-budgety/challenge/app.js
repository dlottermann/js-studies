var BudgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
        return {
            addItem:function(type,des,val){
                var newItem,ID;                

                //Pega O ID do proximo item
                if(data.allItems[type].length > 0){
                    ID = data.allItems[type][data.allItems[type].length-1].id + 1;
                }else{
                    ID = 0;
                }             

                if(type==='exp'){
                   newItem = new Expense(ID,des,val);                  
                }else if(type==='inc'){
                    newItem = new Income(ID,des,val);   
                }
                
               data.allItems[type].push(newItem);
                return newItem;
            },
            testing:function(){
                console.log(data);
            }

        };    

})();


var UIcontroller = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtnAdd: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {

        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem:function(obj, type){
                var html,newHtml,elem;

                if(type ==='inc'){
                    elem = DOMstrings.incomeContainer;
                    html = '<div class="item clearfix" id="income-%ID%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

                }else if(type ==='exp'){
                    elem = DOMstrings.expensesContainer;
                    html = '<div class="item clearfix" id="expense-%ID%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }

                //replace Pattern
                newHtml = html.replace('%ID%', obj.id);
                newHtml = newHtml.replace('%value%', obj.value);
                newHtml = newHtml.replace('%description%', obj.description);

                document.querySelector(elem).insertAdjacentHTML('beforeend',newHtml);

        },

        getDOMstrings: function () {
            return DOMstrings;
        }

    };


})();


var controller = (function (ctrlBudget, ctrlUI) {

    var setupEventListeners = function () {

        var DOM = ctrlUI.getDOMstrings();
        //Click button
        document.querySelector(DOM.inputBtnAdd).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {

        var input,newItem;
         //get all fields   
         input = ctrlUI.getInput();
        //Add Item
         newItem =  ctrlBudget.addItem(input.type,input.description,input.value);    
         //add item to UI
         ctrlUI.addListItem(newItem,input.type);
         //Calculate budget

         //display  budget UI


    };


    return {
        init: function () {
            console.log("inicializado");
            setupEventListeners();
        }
    };



})(BudgetController, UIcontroller);

controller.init();
