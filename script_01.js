
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : Check!
3. Fkt. Grundrechenarten : Check!
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"




startApp()
function startApp() {
	output(calculator(getNum(),getOp(),getNum()));	
}

function getNum() {
	return parseInt(prompt("Zahl"));
}

function getOp() {
	return prompt("operator");
}


// module: calculator | tests:
// agreement : "+","-","*",":","/"

// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));

function calculator(a,op,b) {
		switch (op) {
			
			case "+":
				return add(a,b);
			case "-":
				return subtraction(a,b);
			case "*":
				return multiply(a,b);
			case "/":	
			case ":":	
				return divide(a,b);
		default:
			return ERROR_STR_GEN;
		}
}
// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
// module: addition a + b |  test:
function add(a,b)

{
	return a + b;
	
}
// module: subtraction a - b |  test:
function subtraction(a,b) 
{
	return a - b;
}
// module: multiplication a * b |  test:
function multiply(a,b)
{
	return a * b;	
}
// module: division a / b |  test:
function divide(a,b) 
{
	if (b != 0) 
	{
		return a / b;
	} else 
	{
		return ERROR_STR_DIV;
	}
}




