var questions = [
    {
        question: "1. Where in your html file do you link to the script.js?",
        choices: ["In the head tag", "In the body tag", "In the footer tag"],
        correctAnswer: 1
    },
    {
        question: "2. What is Jquery?", 
        choices: ["A library that has functions stored for later use", "A VS code extention manager", "A way to store imoutted data in the cloud for later retrieval"],
        correctAnswer: 0
    },
    {
        question: "3. How do i write Welcome in an alert box?", 
        choices: ["alerttypebox('Welcome')", "alert('Welcome')", "messagebox('Welcome')"],
        correctAnswer: 1
    },
    {
        question: "4. What is bootstrap?", 
        choices: ["Bootstrap is only for python files", "Bootstrap is a very small library of math funtions", "Bootstrap is a large library of code for styling css and html"],
        correctAnswer: 2
    },{
        question: "5. what is an example of a boolean value?", 
        choices: ["527", "&&", "False"],
        correctAnswer: 2 
    }
]
var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
    var c=180;
    var t;
$(document).ready(function ()
{
    //first question
    displayCurrentQuestion();
    $(this).find(".preButton").attr('diabled, disabled')
})
