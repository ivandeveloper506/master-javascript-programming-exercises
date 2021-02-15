// Write your function here

function isOddLength(palabra){
    if (palabra.length % 2 == 1) {return true};

    return false;
}

let output = isOddLength('special');
console.log(output); // --> verdadero