// Write your function here

function getNthElementOfProperty(object, key, findElement) {
    let foundValue = undefined;
    let validateArray = [];

    //  Primer se valida que la propiedad exista
    if (object.hasOwnProperty(key)) {
        validateArray = object[key];

        // Si existe, se obtiene su valor
        if (Object.prototype.toString.call(validateArray) === '[object Array]') {
            //  La propiedad es un array
            
            // Se valida que tenga elementos y que la posición del item a buscar sea menor o igual al largo
            if(validateArray.length > 0 && findElement <= validateArray.length){
                foundValue = validateArray[findElement];
            }
        }
    }

    return foundValue;
}

let obj = {
  key: [1, 2, 6]
};

let output = getNthElementOfProperty(obj,'key', 1);
console.log(output); // --> 2