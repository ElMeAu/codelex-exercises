export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = function(array: Array<number>) {
    let miniMax = array[0]
    for(let i = 1; i < array.length; i++) {
        if (miniMax > array[i]) { 
            miniMax = array[i];

        }

    }return miniMax
};

const max = function(array: Array<number>) {
    return array.sort()[array.length-1];
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
