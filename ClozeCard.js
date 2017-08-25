function ClozeCard(text, cloze)  {
	this.fullText = fullText; 
	this.clozeText = clozeText;
	this.partialText = partialText;
}
var clozeQuestion1 = new ClozeCard("Javascript code goes in the HTML element <script>", "<script>");
var clozeQuestion2 = new ClozeCard("DRY stands for Don't Repeat Yourself", "Don't Repeat Yourself");
var clozeQuestion3 = new ClozeCard("The $ symbol in JavaScipt stand for the JQuery Selector", "Selector");
var clozeQuestion4 = new ClozeCard("A function inside of an object is a Method", "Method");
var clozeQuestion5 = new ClozeCard("'JSON' stands for Javascript Object Notation", "JavaScipt Object Notation");

module.exports = ClozeCard;