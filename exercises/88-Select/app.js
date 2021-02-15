// Write your function here

function select(arrayInput,objectInput){
    // Se crea el nuevo objeto
     let objectOutput = new Object();

    for (i=0; i <= arrayInput.length; i++){
        // Se valida si una propiedad existe en el objeto
        if (objectInput.hasOwnProperty(arrayInput[i])){
            // Si existe, se crean en el nuevo objeto.
            objectOutput[arrayInput[i]] = objectInput[arrayInput[i]];
        }
    }

     return objectOutput;
}

let arr = ['a', 'c', 'e'];

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }