// Write your function here

function getElementsLessThan100AtProperty(object, key) {
    const VALUE100 = 100;
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
                    if (element[i] < VALUE100){
                        outputArray.push(element[i]);
                    }
                }
            }
        }
    }

    return outputArray;
}

let obj = {
  key: [1000, 20, 50, 500]
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]