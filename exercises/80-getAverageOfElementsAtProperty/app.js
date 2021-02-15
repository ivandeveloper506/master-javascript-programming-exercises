// Write your function here

function getAverageOfElementsAtProperty(obj, key) {
    let valorKey = 7;

    valorKey = obj[key];

    // Esta línea valida si el objeto es un array
    if (Object.prototype.toString.call(valorKey) === "[object Array]") {
        if (valorKey.length === 0) {
            valorKey = 0;
            console.log('Entro 1');
        } else {
            // Se obtiene el promedio de los números del array
            // Se obtiene el promedio de los números del array
            let average = 0;

            for (let i=0; i <= valorKey.length; i++){
                average = average + parseInt(valorKey[i]);
            }

            return average;
        }
    } else {
        // Si no es un array o la propiedad no existe, se va por aqui
        valorKey = 0;
        console.log('Entro 3');
    }

    return valorKey;
}

// let obj = {
//     key: []
// };

// let output = getAverageOfElementsAtProperty(obj, 'key');
// console.log('Si el array en esa key está vacío, debería retornar 0.')
// console.log(output); // --> 2

let obj1 = {
    key: [1, 2, 7]
};

let output2 = getAverageOfElementsAtProperty(obj1, 'key');
console.log('\nSi el array no esta vacío, debería retornar el promedio de todos sus números.')
// console.log(output2); // --> 2

// let obj2 = {
//     key: [1]
// };

// let output3 = getAverageOfElementsAtProperty(obj2, 'key12');
// console.log('\nSi no hay ninguna propiedad en esa key, debería retornar 0.')
// console.log(output3); // --> 2