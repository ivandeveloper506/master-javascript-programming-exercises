// Write your function here

function getElementsThatEqual10AtProperty(object, key) {
    const VALUE10 = 10;
    let element = object[key];
    let outputArray = [];

    //  Primer se valida que la propiedad exista
    if (object.hasOwnProperty(key)) {
        
        // Si existe, se obtiene su valor
        if (Object.prototype.toString.call(element) === '[object Array]') {
            //  La propiedad es un array
            
            // Se valida que tenga elementos
            if(element.length > 0){
            
                // Se validan todos los elementos del array en busca de valores iguales a 10
                for (i=0; i <= element.length; i++){
                    if (element[i] === VALUE10){
                        outputArray.push(VALUE10);
                    }
                }
            }
        }
    }

    return outputArray;
}

let obj = {
    key: [1000, 10, 50, 10]
    // key: 1
};

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]