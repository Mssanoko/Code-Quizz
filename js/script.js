var timer = document.getElementById('time');
var questions = document.getElementById("questions");
var startButton = document.getElementById('startbutton'); 

var questions = [
    {
      question: "Commonly used data types DO NOT include :",
      answers: ["strings","booleans","alerts","number"],
      correctAnswer: "alerts",
    },
    {
      question: "The condition in ann if/else statement is enclosed within_____.",
      answers: ["quotes","curly brackets", "parentheses", "square"],
      correctAnswer: "parentheses",
    },
    {
      question: "Arrays in Javascript can be used to store_____.",
      answers: ["numbers and strings","other arrays","booleans","all of the above"],
      correctAnswer: "all of the above"
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      answers: ["commas", "curly brackets", "quotes", "parentheses"],
      correctAnswer:"quotes"
    },
    {
    
      question:"A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      correctAnswer: "console.log"
    },
    ]