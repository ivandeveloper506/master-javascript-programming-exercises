function isOldEnoughToDrinkAndDrive(age) {
    // your code here

    if (age >= 21) {
        return 'SI tienes la edad suficiente para conducir y beber, sin embargo NO debes beber si conduces.';
    }
    else if (age >= 16) {
        return 'SI tienes la edad suficiente para conducir, pero aún no puedes beber.';
    } else
    {
        return 'NO tienes la edad suficiente para conducir ni para beber.';
    }
}


console.log('Mi edad es de 22 años: ' + isOldEnoughToDrinkAndDrive(22));
console.log('Mi edad es de 16 años: ' + isOldEnoughToDrinkAndDrive(16));
console.log('Mi edad es de 15 años: ' + isOldEnoughToDrinkAndDrive(15));