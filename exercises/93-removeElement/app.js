// Write your function here

function removeElement(inputArray, itemDiscarder) {
    let outputArray = [];
    // Se valida que tenga elementos
    if (inputArray.length > 0) {
        // Se validan todos los elementos del array en busca de valores iguales al de descarte
        for (i = 0; i < inputArray.length; i++) {
            if (inputArray[i] != itemDiscarder) {
                outputArray.push(inputArray[i]);
            }
        }
    }

    return outputArray;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]