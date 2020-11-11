function str_reverse(n){            /this fx will reverse the string and return string /
    return n.split("").reverse().join("");      /n is a string,and split fx will do that it will split each letter and stored it into array , and then we have built-in fx for array reverse , and then we have joined all these letters using join fx/
}

function get_array(n){          
    var arr = [];           /we will return this array/
    n = str_reverse(n);             /we are reversing it and we dont have any built-in fx to do that ,so we are calling a fx again called str_reverse/
    for(var i=0;i<n.length;i++){
        if(i!=2){           /since its an string so it will start from 0,so in string at index 2 only it will break into one digit,thats why we have used this condi./
            arr.push(str_reverse([n[i], n[i+1]].join("")));     /"54321",first it will take "5" and "4",then join it without space "54",and then reverse of it"45",and then pushing it into array named arr/
            i++;        /why we have given increment 2 times becoz when i = 0 then it will join 5 and 4,thats why we have given increment here/
        }else{
            arr.push(n[i]);     /else if i == 2,then we will simply push it,it will a single digit/
        }
    }
    return arr.reverse();       /we have arr like that arr = ["45","3","12"];after reversing it will become arr = ["12","3","45"]/
}

function convert_to_word(n){        /num array will come here for each i/
    var words = {
        0: "zero", 1: "one",  2: "two",  3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninty"
    };          /we have taken an object here having key from 0 to 20,30 --- till 90, and its key value/

    if(n == 0) return "";           //if the value will be zero,it will return blank...eg..1005 = ['1','0','05'] for 0 we are returning blank string else it will take space like one thousand  five/
    else{
        if(n[0] == 0) n=n[1];       //if arr = ['1','0','05'], when 05 will come we dont have to show like zero five, only five will be shown,thats why we have taken 1 index char, we are modifing the n so then it will move to next if..
        
        if(n in words){             //in if we are doing,which is iterator,it will check in the words object untill it will check its last key and value..
            return words[n];        //if n will be in that object, it will return its word ..
        }else{                         //if it will not in object then it will come here,,eg = 23..here our task is to divide it into two parts like 2 and 3,then 2 will become 20 and 3 will be same
            var x = `${n[0]}0`;         //we have taken x for that 2 and templating it,and adding 0 to it
            var y = n[1];               //y will be same like 3 in 23
            return [words[x], words[y]].join(" ");      //firstly we are passing that 20 and 3 into our words object,,so from there, we will get its word like twenty and three, then we are joining it , and at last returning twenty three with space
        }
    }
}

function add_placer(word, i, n){        //first ("twelve",0,3) will come..and twelve place value is thousand.so how we will get this ?using placer[n-1-i] eg. 3 - 0 - 1 = 2 i.e index of "thousand" in placer array.
    var placer = ["", "hundred", "thousand", "lakh", "crore"];      //we have taken an arr called placer,

    return (placer[n-i-1] && word) ? [word, placer[n-i-1]].join(" ") : word;    //here we have used ternary opr. ,first it will check any of the placer we goy or not && is word .. if both is true then we are taking that word and its place and joinning it with space  else if any of them is false it will return that word only.. eg.. "1","0","05" in word array be like ['one',"","five"] so when "" will go inside the fx add_placer then it is in the placer array but word = "" is always false,becoz its blank string which is not ture,so it will return that "" ..
}

function convert(n){            /this fx will called first /
    n = n.toString();           /firstly we have changed number to string becoz it will easy to find the length/
    var num = get_array(n);     /so we are callung a fx becoz eg. n = 12345. we will begin from right to left,and divide it in this format "12","3","45". thats why we are calling a function which will return an array/
    console.log(num);        /num = ["12","3","45"]/
    for(i in num){              /here we are doing loop through in num array/
        word = convert_to_word(num[i]);         /word is string var which will store the word value of each number string.eg = word = twelve/
        word = add_placer(word, i, num.length);         //now we got the words , now we need is its place values...so we are calling fx add_placer having parameters like word(twelve),i(0 =index),length of num array i.e 3
        num[i] = word;              //finally we got word with its placer value in num array
    };
    // console.log(num);
    num = num.filter((value) => {       //here we have used arrow fx,have used filter fx and passed value, this will remove the unnecessary  things like "" from array;
        return value;                   //we are returning back to our array num
    })
    // console.log(num);
    return num.join(" ");           //now the word with places is in the array in specifc index so finally we are joing it with space and returning it to the 
}

console.log(convert(12345));    /called a function convert(it will take number),so this fx will convert number into word/
// console.log(convert(101500));
// console.log(convert(59));
// console.log(convert(2));
// console.log(convert(10));
// console.log(convert(13));
// console.log(convert(19));
// console.log(convert(20));
// console.log(convert(50));
// console.log(convert(55));
// console.log(convert(33));
// console.log(convert(99));
// console.log(convert(100));