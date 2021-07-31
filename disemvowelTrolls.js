function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O','U'];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += (str[i]);
      console.log(newStr);
    }
  }
  return str;
}
