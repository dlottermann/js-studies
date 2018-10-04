var mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBMI:function(){
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
     }
};

var john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 110,
    calcBMI:function(){
       this.bmi =  this.mass / (this.height * this.height);
       return this.bmi;
    }
};


if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName+' has as higher BMI of '+mark.fullName);
}else if(mark.calcBMI() > john.calcBMI()){
    console.log(mark.fullName+' has as higher BMI of '+john.fullName);
}else{
    console.log('They have same BMI.');
}