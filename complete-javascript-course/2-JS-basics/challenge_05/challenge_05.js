var john = {
    fullName:'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {

        //new Properties
        this.tips= [];
        this.totalAmount= [];

        for (var i = 0; i < this.bills.length; i++) {

            var percent;
            if (this.bills[i] < 50) {
                percent = (this.bills[i] * 20) / 100; //.2                
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percent = (this.bills[i] * 15) / 100; //.15               
            } else {
                percent = (this.bills[i] * 10) / 100; //.1             
            }
            this.tips.push(percent);
            this.totalAmount.push(percent + this.bills[i]);
        }

    }
};


//console.log(john.totalAmount);

/* Part 02 */

var mark = {
    fullName:'Mark Miller',
    bills: [77,475,110,45],
    calcTips: function () {

        //new Properties
        this.tips= [];
        this.totalAmount= [];

        for (var i = 0; i < this.bills.length; i++) {

            var percent;
            if (this.bills[i] < 100) {
                percent = (this.bills[i] * 20) / 100; //.2                
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percent = (this.bills[i] * 10) / 100; //.10               
            } else {
                percent = (this.bills[i] * 25) / 100; //.25             
            }
            this.tips.push(percent);
            this.totalAmount.push(percent + this.bills[i]);
        }

    }
};

function calcAverage(tips){
    var sum =0;
    for(var i=0; i<tips.length;i++){
        sum +=tips[i]; 
    }

    return sum / tips.length;

}

mark.calcTips();
john.calcTips();


john.average = calcAverage(john.tips) ;
mark.average = calcAverage(mark.tips);
console.log(john,mark);

if(john.average > mark.average ){
    console.log(john.fullName+'\'s family pays higher tips, with an average of $'+john.average);
}else if(mark.average  > john.average){
    console.log(mark.fullName+'\'s family pays higher tips, with an average of $'+mark.average);
}else{
    console.log('John\'s and Mark\'s family pays the same shit average of tips');
}


