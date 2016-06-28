function power(base, exponent) {
  var result = 1;

  if (exponent == undefined){
    exponent = 2;
  }

  for (var i = 0; i < exponent; i++){
    result*=base;
  }
  console.log(result);
  return result;


}

power(2, 4);
power(5);