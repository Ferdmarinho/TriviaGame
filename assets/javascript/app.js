var number = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// laying out the QUESTIONS - got be an ARRAY of variables

var questions = [{
    question: "What is the U.S.'s oldest city?",
    answerList: ["Boston, MA", "Jamestown, VA", "Saint Augustine, FL", "Philadelphia, PA"],
    answer: 2
},{
    question: "What was the first American city to host the Olympic Games?",
    answerList: ["St. Louis, MO", "Atlanta, GA", "Los Angeles, CA", "Salt Lake City, UT"],
    answer: 0
},{
    question: "What museum in the U.S is the most visited?",
    answerList: ["The Metropolitan Museum of Art", "The National Air and Space Museum", "National Museum of Natural History", "California Academy of Sciences"],
    answer: 1
},{
    question: "The first American skycraper was completed in 1885 in what city?",
    answerList: ["New York City", "St. Louis", "Chicago", "Baltimore"],
    answer: 2
},{
    question: "The 1996 Summer Olympics where held in which U.S. city?",
    answerList: ["San Antonio, TX", "Atlanta, GA", "Denver, CO", "Houston, TX"],
    answer: 1
},{
    question: "The world's largest boardwalk is located in what U.S. city?",
    answerList: ["Ocean City, MD", "Coney Island, NY", "Virginia Beach, VA", "Atlantic City, NJ" , "Santa Monica, CA"],
    answer: 3
},{
    question: "Which one was the first university in the US?",
    answerList: ["Yale University", "Columbia University", "Harvard University", "University of Pennsylvania"],
    answer: 2
}];


$("#start").on("click", function() {

    // Hide Start button
    $(this).hide();
    $("#brain-power").hide();

    // Displaying the initial countdown
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");
    $("#clock-ticks").html("<p>The clock is ticking!</p>" + "<br>");


    // Start timer countdown
    run();
   
    // Display questions --- I still want to turn this into a reusable piece so that i don't have to repeat this section for each question
    // Question 1
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // QUESTION 4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // QUESTION 5
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // QUESTION 6
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // QUESTION 7
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

    // Submit button
    $("#submit").html("<button id='done' class='btn btn-success'>RESULTS</button>");

    // Click event runs keepingScore() and displayResults() when user clicks Done button
    $("#done").on("click", function() {

        // Keeping track of score based on correct, incorrect, and unanswered
        keepingScore();

        // Display 
        displayResults();
        
    });
});

// Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        // Run stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  Clears intervalId
    clearInterval(intervalId);
}

// Function used for displaying results in terms of correct, incorrect, and unanswered --- I want to put all of these tags inside a div so that i can just hide the parent div
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score in terms of correct, incorrect, and unanswered --- I still want to make this a reusable piece so that I don't have to repeat it for each question
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
}
