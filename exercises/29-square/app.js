// Write your function here

function square(num){
    let square = 2;
    let value = 1;

    while (square > 0){
        value = value * num;

        square--;
    }

    return value;
}

var output = square(5);
console.log(output); // --> 25