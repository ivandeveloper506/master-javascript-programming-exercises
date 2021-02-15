// Write your function here

function computeAverageOfNumbers(validateArray, key) {
    let average = 0;

    if (validateArray.length > 0) {
        for (i = 0; i < validateArray.length; i++) {
            average += validateArray[i];
        }

        average = average / validateArray.length;
    }

    return average;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3