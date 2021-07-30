function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = "";
  let newStrArray =[];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== vowels[i]) {
      newStrArray.push(vowels[i]);
    }
  }
  newStr = newStrArray.join(', ')
  str = newStr;
  return str;
}
