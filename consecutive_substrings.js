function consecutiveSubstrings(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      result.push(string.slice(i, j + 1));
    }
  }
  return result;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");
  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");
  console.log("Expecting: ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']");
  console.log("=>", consecutiveSubstrings('abcd'));
}

module.exports = consecutiveSubstrings;