console.log("Hello, this is Ferd's Code")

//VARIABLES

var triviaDisplay = document.getElementById('trivia');
var submitDisplay = document.getElementById('submit');
var resultsDisplay = document.getElementById('results');

function showTrivia(){

     var output = [];

  // This 
  theseQuestions.forEach( (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

       // add this question and its answers to the output
       output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

        // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}
//remove later showTrivia = buildQuiz
function showResults(){}

//HERE is the Start button, that will eventually show the trivia 


// To show the Trivia as soons as the page loads up
showTrivia();

// To submit the answers when clicking in the button
submitButton.addEventListener('click', showResults);

//Building the trivia

var theseQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      rightAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      rightAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
      },
      rightAnswer: "c"
    }
  ];
//PART 3 --------------------------------------------------------------------------------

function showTrivia(){

var output = [];

  // This 
  theseQuestions.forEach( (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

       // add this question and its answers to the output
       output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

        // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}
PART 4 --------------------------------------------------

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    theseQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = 'input[name=question'+questionNumber+']:checked';
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
      }
      // if answer is wrong or blank
      else{
       
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + theseQuestions.length;
  }

