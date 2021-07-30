function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== vowels[i]) {
      newStr.push(str[i]);
    }
  }
  str = newStr.join('');
  //test
  console.log(str)
  return str;
}
