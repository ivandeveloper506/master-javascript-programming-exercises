// Write your function here

function getFirstElementOfProperty(object, key) {
    let fistValue = undefined;
    let validateArray = [];

    //  Primer se valida que la propiedad exista
    if (object.hasOwnProperty(key)) {
        validateArray = object[key];

        // Si existe, se obtiene su valor
        if (Object.prototype.toString.call(validateArray) === '[object Array]') {
            //  La propiedad es un array
            
            // Se valida que tenga elementos
            if(validateArray.length > 0){
                fistValue = validateArray[0];
            }
        }
    }

    return fistValue;
}

let obj = {
  key: [1, 2, 4]
};

let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1