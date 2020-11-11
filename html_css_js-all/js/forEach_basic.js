var arrays = [1,2,3,4,5];       /whatever the length of this array, the output will be shown that much time only/

// var output = function display(){            /this is one of the function /
//     console.log("We are Humans !");
// }

// arrays.forEach(output);               /in foreach,if we will pass the output also we will get the same output/


arrays.forEach(function display(value,index){
    console.log(index+" = "+value);             /in this, actually we have passed entire defined function inside the call back function/ 
});