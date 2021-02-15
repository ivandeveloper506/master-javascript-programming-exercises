// Write your function here

function cube(num){
    let cube = 3;
    let value = 1;

    while (cube > 0){
        value = value * num;

        cube--;
    }

    return value;
}

var output = cube(3);
console.log(output); // --> 27