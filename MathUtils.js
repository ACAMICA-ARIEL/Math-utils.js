function add(num1, num2) {
	return num1 + num2
}

function subtract(num1, num2) {
	return num1 - num2
}

function multiply(num1, num2) {
	return num1 * num2
}

function divide(num1, num2) {
	return num1 / num2
}

function esMenor(num1, num2) {
	if (num1 < num2) return num1
	return num2
}

function potencia(num1, num2) {
	let potencia = Math.pow(num1, num2)
	return potencia
}

function raizCuadrada(num) {
	return Math.sqrt(num)
}

function perimetro(largo,ancho){
	return (largo + ancho)*2
}
function perimetro(largo, ancho) {
	return 2 * largo + 2 * ancho
}

function perimetro(num1, num2){
	let perimetro = (num1*2)+(num2*2)
	return perimetro;
}
function perimetro(num1, num2) {
	let perimetro = num1 * 2 + num2 * 2
	return perimetro
}
function perimetro(ancho, largo) {
	return ancho * largo
}

console.log(perimetro(12, 13))


console.log('demo para Pull request')

function perimetro (ladoA, ladoB) {
	return 2*ladoA + 2*ladoB
}

