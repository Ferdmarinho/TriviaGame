console.log("Hello, this is Ferd's Code")

//VARIABLES

const triviaDisplay = document.getElementById('trivia');
const submitDisplay = document.getElementById('submit');
const resultsDisplay = document.getElementById('results');

function showTrivia(){}

function showResults(){}

//HERE is the Start button, that will eventually show the trivia 


// To show the Trivia as soons as the page loads up
showTrivia();

// To submit the answers when clicking in the button
submitButton.addEventListener('click', showResults);

//Building the trivia

const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];
