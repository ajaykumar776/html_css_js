function counts_vowel(str)
{
  return str.replace(/[^aeiou]/g,"").length;
}
console.log(counts_vowel("my nam is ajay kumar and  my fav game is pubge i am intrested in coding"));