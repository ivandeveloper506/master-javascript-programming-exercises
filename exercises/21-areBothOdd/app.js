// Write your function here

function areBothOdd(num1,num2){
    if (num1 % 2 == 1 && num2 % 2 == 1)  {return true};

    return false;
}

let output = areBothOdd(1, 3);
console.log(output); // --> verdadero