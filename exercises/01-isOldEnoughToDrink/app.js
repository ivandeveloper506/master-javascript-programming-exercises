function isOldEnoughToDrink(edad) {
    // your code here

    if (edad >= 21){
        return 'SI tienes la edad suficiente para beber.'
    }
    else{
        return 'NO tienes la edad suficiente para beber.'
    }
}

console.log('Mi edad es de 22 años: ' + isOldEnoughToDrink(22));

console.log('Mi edad es de 20 años: ' + isOldEnoughToDrink(20));