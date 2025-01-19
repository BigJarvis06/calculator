
// math functions

const add = function(a, b) {
	return Number(a + b);
}

const subtract = function(a, b) {
	return Number(a - b);
}

const multiply = function(a, b) {
	return a * b;
}

const divide = function(a, b) {
	return a / b;
}

const inputs = {
"firstNum" : "",
"secondNum" : "",
"operator" : undefined,
"result" : false
}
// operate function

function operate(a, b, op) {
	a = Number(inputs.firstNum);
	b = Number(inputs.secondNum);
	op = inputs.operator;
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
	switch (a) {
		case buttons.add.textContent:
		case buttons.subtract.textContent:
		case buttons.multiply.textContent:
		case buttons.divide.textContent:
		case operate:
			display.textContent = a;
			break;
		default:
			if (display.textContent.includes(buttons.add.textContent) ||
				display.textContent.includes(buttons.subtract.textContent) ||
				display.textContent.includes(buttons.multiply.textContent) ||
				display.textContent.includes(buttons.divide.textContent) ||
				inputs.result === true)
				{
				inputs.result = false;
				display.textContent = "";
				display.textContent += a;
			} else {
				display.textContent += a;
			}
	}
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
	equals : document.querySelector("#equals"),
  backSpace : document.querySelector("#backspace")
}

// event listeners

function checkOp(num) {
	if (!inputs.operator) {
		inputs.firstNum += num;
	} else {
		inputs.secondNum += num;
	}
}

Object.keys(buttons).forEach(button => {
	addEventListener("click", event => {
		let target = event.target;
		switch (target.className || target.id) {
// numbers
			case "number-one":
					changeDisplay("1");
					checkOp("1");
					event.stopImmediatePropagation();
				break;
			case "number-two":
					changeDisplay("2");
					checkOp("2");
					event.stopImmediatePropagation();
				break;
			case "number-three":
					changeDisplay("3");
					checkOp("3");
					event.stopImmediatePropagation();
				break;
			case "number-four":
					changeDisplay("4");
					checkOp("4");
					event.stopImmediatePropagation();
				break;
			case "number-five":
					changeDisplay("5");
					checkOp("5");
					event.stopImmediatePropagation();
				break;
			case "number-six":
					changeDisplay("6");
					checkOp("6");
					event.stopImmediatePropagation();
				break;
			case "number-seven":
					changeDisplay("7");
					checkOp("7");
					event.stopImmediatePropagation();
				break;
			case "number-eight":
					changeDisplay("8");
					checkOp("8");
					event.stopImmediatePropagation();
				break;
			case "number-nine":
					changeDisplay("9");
					checkOp("9");
					event.stopImmediatePropagation();
				break;
			case "number-zero":
					changeDisplay("0");
					checkOp("0");
					event.stopImmediatePropagation();
				break;
// operations
			case "clear":
					clearDisplay();
					inputs.firstNum = "";
					inputs.secondNum = "";
					inputs.operator = undefined;
					event.stopImmediatePropagation();
				break;
			case "equals":
					if (inputs.firstNum && inputs.secondNum && inputs.operator) {
						clearDisplay();
						changeDisplay(operate());
							inputs.firstNum = "";
							inputs.secondNum = "";
							inputs.operator = undefined;
							inputs.result = true;
								event.stopImmediatePropagation();
						} else {
						break;
					}
				break;
			case "add":
					changeDisplay(buttons.add.textContent);
					inputs.operator = add;
					event.stopImmediatePropagation();
				break;
			case "subtract":
					changeDisplay(buttons.subtract.textContent);
					inputs.operator = subtract;
					event.stopImmediatePropagation();
				break;
			case "multiply":
				changeDisplay(buttons.multiply.textContent);
					inputs.operator = multiply;
					event.stopImmediatePropagation();
				break;
			case "divide":
					changeDisplay(buttons.divide.textContent);
					inputs.operator = divide;
					event.stopImmediatePropagation();
				break;
      case "backspace":
        backspace();
        event.stopImmediatePropagation();
		}
	})
})

// backspace function

function backspace() {
  if (inputs.secondNum) {
		  inputs.secondNum = inputs.secondNum.slice(0, -1);
	  	display.textContent = display.textContent.slice(0, -1);
  } else if (inputs.operator) {
        inputs.operator = undefined;
        display.textContent = inputs.firstNum;
    } else if (inputs.firstNum) {
          inputs.firstNum = inputs.firstNum.slice(0, -1);
          display.textContent = display.textContent.slice(0, -1);
      }
}

//