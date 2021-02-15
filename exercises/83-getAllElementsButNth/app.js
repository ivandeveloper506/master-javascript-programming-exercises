// Write your function here

function getAllElementsButNth(inputArray,item){
    return inputArray.slice(0,inputArray.length - item);
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']