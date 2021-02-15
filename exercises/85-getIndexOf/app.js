// Write your function here

function getIndexOf(item,searchArray){
    let indexFound = -1;
    let counter = 0;

    while (counter <= searchArray.length){
        if (item === searchArray[counter]){
            indexFound = counter;
            break;
        }

        counter++;
    }

    return indexFound;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2