var fruits = ["apple", "mango", "banana"];

console.log(fruits);    /whole of the fruits will be print/
console.log(fruits[0]);     /fruit which is at index 0 will only print/
console.log(fruits.length);     /used to find the fruits array length/
console.log(fruits.push("orange"));     /this will push new fruit at last index/
console.log(fruits);
console.log(fruits.indexOf("apple"));       /it will give the index of apple/
console.log(fruits.indexOf("kkk"));         /if anything which is not there,it will give anything/

for(i=0;i<fruits.length;i++){
    console.log(i + " " + fruits[i]);       /it will print the index as well as fruit name at that index/
}

fruits.forEach(function(value,index){
    console.log([value, index]);            /using forEach, we can also print it, but first we have take one function and pass the parameters value and index.also it is call_back_func./
})                                             

console.log(fruits.sort());     /this will sort the name alphabatically /

var arr = [1,2,3,4,5];      
arr_square = arr.map(function(value){       /in this we are not changing the previous array /
   return value * value;
});
console.log(arr_square);

arr_filter = arr.filter(function(value){
    return value >= 3;                  /it will filter the array according to the condition/
});
console.log(arr_filter);

arr_reduce = arr.reduce(function(prev, current){
    return prev + current;
});
console.log(arr_reduce);