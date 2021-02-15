// Write your function here

function isEvenLength(palabra){

    if (palabra.length % 2 == 0) {return true};

    return false;
}

let output = isEvenLength('wow');
console.log(output); // --> falso