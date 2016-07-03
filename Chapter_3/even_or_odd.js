function evenOrOdd(number){
  if (number === 0){
    return true;
  } else if (number === 1){
    return false;
  } else if (number > 0){
    return evenOrOdd(number - 2);
  } else {
    return evenOrOdd(number + 2);
  }

}

console.log(evenOrOdd(-2));