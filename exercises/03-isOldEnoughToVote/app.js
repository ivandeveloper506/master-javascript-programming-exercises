function isOldEnoughToVote(age) {
  // your code here

  if (age >= 18){
        return 'SI tienes la edad suficiente para votar.'
    }
    else{
        return 'NO tienes la edad suficiente para votar.'
    }
}

console.log('Mi edad es de 22 años: ' + isOldEnoughToVote(22));

console.log('Mi edad es de 15 años: ' + isOldEnoughToVote(15));