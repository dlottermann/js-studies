var massMark,heightMark;
var massJohn,heightJohn;
var bmiMark, bmiJohn;
var higher;

//Set Values
massMark = 80;
heightMark = 1.70;

massJohn = 92;
heightJohn = 1.95;

//BMI = mass / height² 
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

higher = (bmiMark > bmiJohn);

console.log('Is Mark\'s BMI higher than John\'s? '+higher);


