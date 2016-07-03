function count(chickens, cows){
  var chickenString = String(chickens);
  while (chickenString.length<3){
    chickenString= "0" + chickenString;
  }
  console.log(chickenString + " chickens");

  var cowString = String(cows);
  while (cowString.length<3){
    cowString= "0" + cowString;
  }
  console.log(cowString + " cows");
}

count(8, 22);