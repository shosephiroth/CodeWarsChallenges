function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O','U'];
  let newStr = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].includes(vowels[i])) {
      newStr = newStr.push(str[i]);
      console.log(newStr);
    }
  }
  //str = newStr.join('');
  //test
  console.log(str);
  return str;
}
