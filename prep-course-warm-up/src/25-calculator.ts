export {};

function add(Num1:number, Num2:number ) {
	return Num1+Num2
}

function subtract(Num1:number, Num2:number) {
	return Num1 -Num2
}

function sum(num:number[]) {
	let Num1:number = 0
	for(let i=0; i<=num.length -1; i++){
		Num1+=num[i]
	}
	
	return Num1
}
function multiply(num:number[]) {
	let Num1:number = 1
	for(let i=0; i<=num.length -1; i++){
		Num1*=num[i]
	}
	return Num1
}

function power(Num1:number, Num2:number) {
	return Math.pow(Num1,Num2)
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
