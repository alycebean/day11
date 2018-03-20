//var myName = prompt("What is your name?");

//var heightInches = prompt("How tall are you in inches?");

//var weightPounds = prompt("How much do you weigh in pounds?");

//var heightCentimeters = heightInches * 2.54;

//var weightKilograms = weightPounds * 0.453592;

//console.log(myName + ' is ' + heightCentimeters + ' cm and ' + weightKilograms + ' kg.');




//function greeting() {
//	console.log("Hello Alyce")
//}

//greeting();

//var myName = "Alyce"

function greeting(){
	console.log("Hello " +  myName)
}

greeting();

var myName = prompt("What is your name?");
var newLang = prompt("Do you know a language besides english?");
var welcomeSaying = prompt("how do you greet others in that language?");

function greeting(name, language, saying){
	console.log(saying + " " + name + ", nice to speak with someone who knows " + language);
}

greeting(myName, newLang, welcomeSaying);


//function addItUp(x,y) {
//	var z = x + y;
//	return z;
//}

//var num = addItUp(40,2);

