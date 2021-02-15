// Write your function here

function addToFrontOfNew(inputArray,item){
    // Crea una copia exacta de un array
    let outputArray = inputArray.slice([0]);

    // Inserta un elemento al inicio del array
    outputArray.unshift(item);

    return outputArray;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // [1, 2]