
// math functions

const add = function(a, b) {
	return a + b;
}

const subtract = function(a, b) {
	return a - b;
}

const multiply = function(a, b) {
	return a * b;
}

const divide = function(a, b) {
	return a / b;
}

const inputs = {
firstNum : "",
secondNum : "",
operator : undefined
}
// operate function

function operate(a, b, op) {
	a = firstNum;
	b = secondNum;
	op = operator;
	switch (op) {
		case add:
				return add(a, b);
			break;
		case subtract:
				return subtract(a, b);
			break;
		case multiply:
				return multiply(a, b);
			break;
		case divide:
				return divide(a, b);
			break;
		default:
			break;
	}
}

// display

// pass function "operate" into change display

const display = document.querySelector("#display");

const changeDisplay = function(a) {
	display.textContent += a;
}

const clearDisplay = function() {
	display.textContent = "";
}

// buttons

const buttons = {
	add : document.querySelector("#add"),
	subtract : document.querySelector("#subtract"),
	multiply : document.querySelector("#multiply"),
	divide : document.querySelector("#divide"),
	one : document.querySelector(".number-one"),
	two : document.querySelector(".number-two"),
	three : document.querySelector(".number-three"),
	four : document.querySelector(".number-four"),
	five : document.querySelector(".number-five"),
	six : document.querySelector(".number-six"),
	seven : document.querySelector(".number-seven"),
	eight : document.querySelector(".number-eight"),
	nine : document.querySelector(".number-nine"),
	zero : document.querySelector(".number-zero"),
	clear : document.querySelector("#clear"),
	equals : document.querySelector("#equals")
}

// event listeners

Object.keys(buttons).forEach(button => {
	addEventListener("click", event => {
		let target = event.target;
		switch (target.className || target.id) {
// numbers
			case "number-one":
					changeDisplay("1");
					if (!operator) {
						inputs.firstNum + "1";
					} else {
						inputs.secondNum + "1";
					}
					event.stopImmediatePropagation();
				break;
			case "number-two":
					changeDisplay("2");
					if (!operator) {
						firstNum = `${firstNum}` + "2";
					} else {
						secondNum = `${secondNum}` + "2";
					}
					event.stopImmediatePropagation();
				break;
			case "number-three":
					changeDisplay("3");
					if (!operator) {
						firstNum = `${firstNum}` + "3";
					} else {
						secondNum = `${secondNum}` + "3";
					}
					event.stopImmediatePropagation();
				break;
			case "number-four":
					changeDisplay("4");
					if (!operator) {
						firstNum = `${firstNum}` + "4";
					} else {
						secondNum = `${secondNum}` + "4";
					}
					event.stopImmediatePropagation();
				break;
			case "number-five":
					changeDisplay("5");
					if (!operator) {
						firstNum = `${firstNum}` + "5";
					} else {
						secondNum = `${secondNum}` + "5";
					}
					event.stopImmediatePropagation();
				break;
			case "number-six":
					changeDisplay("6");
					if (!operator) {
						firstNum = `${firstNum}` + "6";
					} else {
						secondNum = `${secondNum}` + "6";
					}
					event.stopImmediatePropagation();
				break;
			case "number-seven":
					changeDisplay("7");
					if (!operator) {
						firstNum = `${firstNum}` + "7";
					} else {
						secondNum = `${secondNum}` + "7";
					}
					event.stopImmediatePropagation();
				break;
			case "number-eight":
					changeDisplay("8");
					if (!operator) {
						firstNum = `${firstNum}` + "8";
					} else {
						secondNum = `${secondNum}` + "8";
					}
					event.stopImmediatePropagation();
				break;
			case "number-nine":
					changeDisplay("9");
					if (!operator) {
						firstNum = `${firstNum}` + "9";
					} else {
						secondNum = `${secondNum}` + "9";
					}
					event.stopImmediatePropagation();
				break;
			case "number-zero":
					changeDisplay("0");
					if (!operator) {
						firstNum = `${firstNum}` + "0";
					} else {
						secondNum = `${secondNum}` + "0";
					}
					event.stopImmediatePropagation();
				break;
// operations
			case "clear":
					clearDisplay();
					firstNum = "";
					secondNum = "";
					operator = null;
					event.stopImmediatePropagation();
				break;
			case "equals":
					if (firstNum && secondNum && operator) {
					operate();
					event.stopImmediatePropagation();
					} else {
						break;
					}
				break;
			case "add":
					operator = add;
					console.log("add")
					event.stopImmediatePropagation();
				break;
			case "subtract":
					operator = subtract();
					event.stopImmediatePropagation();
				break;
			case "multiply":
					operator = multiply();
					event.stopImmediatePropagation();
				break;
			case "divide":
					operator = divide();
					event.stopImmediatePropagation();
				break;
		}
	})
})

//
