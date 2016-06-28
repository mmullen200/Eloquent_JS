
ANCESTRY_FILE = require('./ancestry.js');

function average(array) {
	function plus(a, b) {return a+b;}
	return array.reduce(plus) /array.length;
}

var ancestry = JSON.parse(ANCESTRY_FILE);
// console.log(ancestry);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var mother_ages = [];

function hasMother(person){
	return byName[person.mother];
}

ancestry.filter(hasMother).forEach(function(person){
   mother_ages.push(person.born - byName[person.mother].born);
});

console.log(average(mother_ages));




//function filter(array, test) {
//  var passed = [];
//  for (var i = 0; i < array.length; i++) {
//    if (test(array[i]))
//        console.log(passed);
//      passed.push(array[i]);
//  }
//  return passed;
//}
//
//console.log(filter(ancestry, function(person) {
//    console.log(person.mother !== null);
//    return person.mother !== null;
//}))

