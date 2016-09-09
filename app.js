function findLongestWord(str) {
  // Turn string (str) into an array
  var arrayStr = str.split(' ');
  console.log(arrayStr);

  // Sort arrayStr from smallest to largest
  var sortArrayStr = arrayStr.sort(function(a,b){
    return b.length - a.length;
  });
  console.log(sortArrayStr);

  // Access first string in sortArrayStr
  // by using index [0] and place it in str
  str = sortArrayStr[0];

  return str.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
