function checkAge(name, age) {
    // your code here
    
    if (age >= 21) {
        return console.log('¡Bienvenido ' + name + '!');
    } else {
        return console.log('¡Para la casa ' + name + '!');
    }
}

let output = checkAge('Adrian', 22);
console.log(output); // --> '¡BIenvenido Adrian!'

console.log(checkAge('Oscar', 20));