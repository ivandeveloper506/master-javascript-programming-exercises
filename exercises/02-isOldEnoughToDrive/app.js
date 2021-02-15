function isOldEnoughToDrive(age) {
  // your code here

  if (age >= 16){
        return 'SI tienes la edad suficiente para conducir.'
    }
    else{
        return 'NO tienes la edad suficiente para conducir.'
    }
}

console.log('Mi edad es de 22 años: ' + isOldEnoughToDrive(22));

console.log('Mi edad es de 15 años: ' + isOldEnoughToDrive(15));