function isPalindrome(word) {
  // Write your algorithm here
for ( let i = 0; i <word.length/2; i++) {
  const j = word.length - 1 - i;
  const startChar = word[i];
  const endChar = word[j];
  if (startChar !== endChar) return false;
}
return true;
}

/* 
  Add your pseudocode here
that means if the first letter is the same as last letter, and the second letter is the same
as the second latter to last letter, etc. yntil we reach the middle, return true.

iterate from the beginning to the middle
check each letter to the corresponding letter from the end
if any letters don't match, return false

return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));
  

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
