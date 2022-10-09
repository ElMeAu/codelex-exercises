export {};

const repeatString = (a:string, b:number) => {
	return a.repeat(b)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
