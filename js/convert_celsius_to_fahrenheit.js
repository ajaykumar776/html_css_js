function cToF(celsius)
{

    var cTemp = celsius;
   var cToFarhen= cTemp * 9 / 5 +32; 
   
var message = cTemp+'\xB0C is ' + cToFarhen+ '\xB0f';
console.log(message);
}
function fToc(fahrenheit)
{
var fTemp= fahrenheit;
var fTocel=(fTemp-32)*5/9;
var message = fTemp+'\xB0f is  ' +fTocel+'\xB0C.';
console.log(message);
}
cToF(60);
fToc(45);