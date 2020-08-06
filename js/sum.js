function factor(n)
{
  var newarray=[];
  var i=0;
  for(i=1;i<=n;i++)
  {
    if(n%i===0)
    {
     newarray=newarray+i;
    }

  }
  console.log(newarray);

}
console.log(factor(15));  



// function is_perfect(number)
// {
// var temp = [];
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
//      console.log(temp);
   
//  } 
// is_perfect(28); 