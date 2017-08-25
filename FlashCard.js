var BasicCard = require("./BasicCard.js");

var question1 = new BasicCard("Which HTML element do we put the JavaScipt code in?", "<script>");
var question2 = new BasicCard("What does 'DRY' stand for?", "Don't Repeat Yourself");
var question3 = new BasicCard("What is this symbol stand for in JQuery: '$'", "Selector");
var question4 = new BasicCard("What is a function inside of an object called?", "Method");
var question5 = new BasicCard("What does 'JSON' stand for?", "JavaScipt Object Notation");

console.log(question1.front)