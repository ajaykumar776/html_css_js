function add_two_digits(n)
   {
      return n % 10 + Math.floor(n / 10);
   }
console.log(add_two_digits(22))
console.log(add_two_digits(50))