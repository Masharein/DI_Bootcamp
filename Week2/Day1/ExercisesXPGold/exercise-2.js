let str1 = "mix";
let str2 = "pod";
let newWordMi = str1.slice(0, 2);
let newWordPo = str2.slice(0, 2);
let newWordX = str1.slice(2);
let newWordD = str2.slice(2);
let newWordFirst = newWordMi + newWordD;
let newWordSecond = newWordPo + newWordX;
console.log(newWordSecond + ' ' + newWordFirst);
