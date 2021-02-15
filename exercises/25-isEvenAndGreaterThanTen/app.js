// Write your function here

function isEvenAndGreaterThanTen(numero){

    if (numero % 2 == 0 && numero > 10 ) {return true};

    return false;
}

let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> falso