// Write your function here

function countAllCharacters(texto) {
    // Se crea el nuevo objeto
    let objectOutput = new Object();

    // Se recorre el array para crear las propiedas del objeto
    for (i = 0; i < texto.length; i++) {
        // El valor de la primera propiedad siempre tendrá minimo una ocurrencia.
        if (i === 0){
            objectOutput[texto.substring(i, i + 1)] = 1;
        } else {
        objectOutput[texto.substring(i, i + 1)] = 0;
        }
    }

    // Se recorre el objeto para actualizar sus valores.
    for (element in objectOutput) {
        let pos = 0;

        // Se buscan las letras con un ciclo
        while (pos != -1) {
            pos = texto.indexOf(element, pos + 1);

            if (pos > 0) {
                objectOutput[element] = objectOutput[element] + 1;
            }
        }
    }

    return objectOutput;
}

console.log('Las ocurrencias de las letras en la palabra [banana] son:')
let output = countAllCharacters('bananab');
console.log(output); // --> {b: 1, a: 3, n: 2}