

var words = ["ground", "control", "to", "major", "tom"];

function map(logs, callBack){
  var newArray =[];
  for (var i in logs){
    newArray[i] = callBack(logs[i]);


  }
  console.log(newArray);
}





map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(words);

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]