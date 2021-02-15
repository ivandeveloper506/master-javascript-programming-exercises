// Write your function here

function getOddLengthWordsAtProperty(object, key) {
    let validateArray = [];
    let outputArrat = [];

    //  Primer se valida que la propiedad exista
    if (object.hasOwnProperty(key)) {
        validateArray = object[key];

        // Si existe, se obtiene su valor
        if (Object.prototype.toString.call(validateArray) === '[object Array]') {
            //  La propiedad es un array
            
            for (i=0; i < validateArray.length; i++){
                // console.log(validateArray[i].length);
                if (validateArray[i].length % 2 != 0){
                    outputArrat.push(validateArray[i]);
                }
            }
        }
    }

    return outputArrat;
}

let obj = {
  key: ['It', 'has', 'some', 'words', 'hola', 'los', 'mar', 'mio', 'casa']
};

let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']