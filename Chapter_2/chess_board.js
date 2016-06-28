var size = 9;
var square = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j)%2 == 0) {
      square+=" ";
    } else {
      square+="#";
    }
  }
  square+="\n";
}

console.log(square);