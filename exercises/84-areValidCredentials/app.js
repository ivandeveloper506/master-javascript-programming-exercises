// Write your function here

function areValidCredentials(name,password) {
    return name.length > 3 && password.length >= 8;
    
    return false;
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero