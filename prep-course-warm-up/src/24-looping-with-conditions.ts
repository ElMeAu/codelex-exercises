export {};

function onlyTheAces(arr: string[]) { 
	let theAces: string[] = []

	for (let i = 0; i < arr.length; i++)  {
		if (arr[i] == "Ace") {

			theAces.push(arr[i])
		} 
	} return theAces


}


console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
