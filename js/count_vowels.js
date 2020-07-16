function counts_vowel(str)
{
  return str.replace(/[^aeiou]/g,"").length;
}
console.log(counts_vowel("ajay"));