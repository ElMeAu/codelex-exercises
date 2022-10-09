export {};

function truncateString(w:string, a:number): string {

	return w.substring(0, a);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE

