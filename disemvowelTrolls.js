function disemvowel(str) {
  let vowels = [a, e, i, o, u];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if str[i] !== vowels[i] {
      newStr += vowels[i];
    }
  }
  return str;
}
