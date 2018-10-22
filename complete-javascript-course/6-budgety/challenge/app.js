var BudgetController = (function(){

    return{

    }

})();


var UIcontroller = (function(){

    var DOMstrings = {
        inputType :'.add__type',
        inputDescription :'.add__description',
        inputValue :'.add__value',
        inputBtnAdd :'.add__btn'
    }
    

    return {

        getInput:function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings : function(){
            return DOMstrings;
        }

    }


})();


var controller =(function(ctrlBudget,ctrlUI){

    var setupEventListeners =function(){

        var DOM = ctrlUI.getDOMstrings(); 
        //Click button
          document.querySelector(DOM.inputBtnAdd).addEventListener('click',ctrlAddItem);
            
          document.addEventListener('keypress',function(event){
                if(event.keyCode ===13 || event.which === 13){
                    ctrlAddItem();
                }
            });
        };

    var ctrlAddItem =function(){
            
        var input = ctrlUI.getInput();
        console.log(input);

    };


 

})(BudgetController,UIcontroller);