function countBs(myString){
  var count = 0;
  for (var i = 0; i < myString.length; i++) {
    if (myString.charAt(i) == "B"){
      count++;
    }
  }

  return count;
}

console.log(countBs("Bob Baker Baked Big Bags of Bamboo"));

function countChar (myString, character){
  var count = 0;
  for (var i = 0; i < myString.length; i++){
    if (myString.charAt(i) == character){
      count++;
    }
  }
  return count;
}

console.log(countChar("Who knows which way the wind blows", "w"));

function newCountBs(myString){
  return countChar(myString, "B");
}

console.log(newCountBs("Big Badass Bagladies in Boots", "B"));
