export {};

const count = (str: string, word: string) => {
	let regx = new RegExp(word, "g");
	let matches = str.toLowerCase().match(regx);
	return (matches || []).length
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
