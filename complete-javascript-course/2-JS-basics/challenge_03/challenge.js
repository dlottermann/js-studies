//124,48 and 268 

//20% less then $50
//15% between 50 and 200
//10% more then 200

var bills = [124, 48, 268];
var arrayTips = new Array();
var arrayTotalAmount = new Array();


function calcTips(bill) {
    var percent = 0;
    if (bill < 50) {
        percent = (bill * 20) / 100; //.2
    } else if (bill >= 50 && bill < 200) {
        percent = (bill * 15) / 100; //.15
    } else {
        percent = (bill * 10) / 100; //.1
    }
    arrayTips.push(percent);
    arrayTotalAmount.push(percent + bill);

}

calcTips(124);
calcTips(48);
calcTips(268);

function tipCalculator(bill) {
    var percent = 0;
    if (bill < 50) {
        percent = .2;
    } else if (bill >= 50 && bill < 200) {
        percent =  .15;
    } else {
        percent = .1;
    }
    return (percent* bill);
  
}

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var totalAmount = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(tips);
console.log(totalAmount);