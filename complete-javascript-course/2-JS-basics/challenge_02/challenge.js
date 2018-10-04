//John 89,120,103
//Mike 116,94,123

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

/*
switch (true) {
    case (scoreJohn > scoreMike):
        console.log('John\'s team win with score: ' + scoreJohn);
        break;
    case (scoreMike > scoreJohn):
        console.log('Mike\'s team win with score: ' + scoreMike);
        break;
    default:
        console.log('Mike and John have same score draw');
}*/


switch (true) {
    case (scoreJohn > scoreMike && scoreJohn > scoreMary):
        console.log('John\'s team win with score: ' + scoreJohn);
        break;
    case (scoreMike > scoreJohn && scoreMike > scoreMary):
        console.log('Mike\'s team win with score: ' + scoreMike);
        break;
    case (scoreMary > scoreJohn && scoreMary > scoreMike):
        console.log('Mary\'s team voleyball win with score: ' + scoreMary);
        break;
    default:
        console.log('Mike, Mary and John have same score draw');
}