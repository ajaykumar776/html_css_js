function newstring(str)
{
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3);
    return (result_str.repeat(10)) ;
  }
  else
    return false;
}
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));