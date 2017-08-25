function BasicCard(front, back)  {
	this.front = front;
	this.back = back;
}
var basicQuestion1 = new BasicCard("Javascript code goes in the HTML element", "<script>");
var basicQuestion2 = new BasicCard("DRY stands for", "Don't Repeat Yourself");
var basicQuestion3 = new BasicCard("The $ symbol in JavaScipt stand for the JQuery", "Selector");
var basicQuestion4 = new BasicCard("A function inside of an object is a Method", "Method");
var basicQuestion5 = new BasicCard("'JSON' stands for Javascript Object Notation", "JavaScipt Object Notation");



module.exports = BasicCard;