function getProperty(obj, key) {
  // your code here

  return obj[key];
}

let car = {
  model: 'Toyota'
};


let output = getProperty(car,'model');
console.log('El valor de la propiedad [model] en el objeto [car] es:')
console.log(output);

let output1 = getProperty(car,'modelos');
console.log('\nEl valor de la propiedad [modelos] en el objeto [car] es:')
console.log(output1);