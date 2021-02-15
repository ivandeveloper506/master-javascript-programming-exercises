// Write your function here

function addToBackOfNew(inputArray,item){
    // Crea una copia exacta de un array
    let outputArray = inputArray.slice([0]);

    // Inserta un elemento al final del array
    outputArray.push(item);

    return outputArray;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3