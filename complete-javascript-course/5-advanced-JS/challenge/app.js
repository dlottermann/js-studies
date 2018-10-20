//Begginer level
/*(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correctAnswer) {
      console.log("Correct answer. Great!!");
    } else {
      console.log("Wrong answer. Try again! :)");
    }
  };

  var q1 = new Question(
    "Is Javascript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  //Array of questions
  var questions = [q1, q2, q3];

  //get Random question
  var n = Math.floor(Math.random() * questions.length);

  //Call prototype
  questions[n].displayQuestion();

  var answer = parseInt(window.prompt("Please select the correct answer."));

  questions[n].checkAnswer(answer);
})();*/

//Expert

(function () {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    };

    //Prototype with callback function closure example
    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correctAnswer) {
            console.log("Correct answer. Great!!");
            sc = callback(true);
        } else {
            console.log("Wrong answer. Try again! :)");
            sc = callback(false);
        }
        this.displayScore(sc);

    };

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------||------------------');
    };


    var q1 = new Question(
        "Is Javascript the coolest programming language in the world?",
        ["Yes", "No"],
        0
    );

    var q2 = new Question(
        "What is the name of this course's teacher?",
        ["John", "Micheal", "Jonas"],
        2
    );

    var q3 = new Question(
        "What does best describe coding?",
        ["Boring", "Hard", "Fun", "Tedious"],
        2
    );

    //Array of questions
    var questions = [q1, q2, q3];

   //Closure example 
    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }

    var keepScore = score();

    function nextQuestion() {
        //get Random question
        var n = Math.floor(Math.random() * questions.length);

        //Call prototype
        questions[n].displayQuestion();
        var answer = window.prompt("Please select the correct answer.");

        if (answer !== "exit") {
            questions[n].checkAnswer(parseInt(answer),keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();