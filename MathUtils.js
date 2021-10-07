function add(num1, num2) {
	console.log('The addition is: ', num1 + num2)
}

function subtract(num1, num2) {
	console.log('The subtraction is: ', num1 - num2)
}

function multiply(num1, num2) {
	console.log('The multiplication is: ', num1 * num2)
}

function divide(num1, num2) {
	console.log('The division is: ', num1 / num2)
}

function esMenor(num1, num2) {
	if (num1 < num2) return num1
	return num2
}

function potencia(num1, num2) {
	let potencia = Math.pow(num1, num2)
	return potencia
}
