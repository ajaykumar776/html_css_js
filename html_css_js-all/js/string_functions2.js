function length(){
    var name = "Aaqib";
    console.log(name.length);
}

function index_of(){
    var str = "My Name is Gouher";
    console.log(str.indexOf("is"));
}

function last_index_of(){
    var str = "You are good boy !";
    console.log(str.lastIndexOf("boy"));
}

function search_(){
    var str = "I am going to home.";
    var pos = str.search("to");         /it will return the index of match else return -1/ 
    var pos1 = str.search("from");
    console.log(pos);
    console.log(pos1);
}

function slice_(){
    var fruits = "Apple,Banana,Mango";
    var buy = fruits.slice(6,12);          /if we will give positive index then,will take from start/
    var buy1 = fruits.slice(-12,-6);       /if we will give -ve index then,will take from end/
    console.log(buy);
    console.log(buy1);
}

function substring_(){
    var vehicles = "car,bike,cycle";
    var buy = vehicles.substring(4,8);      /will not take -ve values/
    console.log(buy);
}

function substr_(){
    var clothes = "shirt,jeans,paint";
    var buy = clothes.substr(6,5);      /first parameter will be the starting index and 2nd parameter will be the length of it /
    var buy1 = clothes.substr(-5);      /can take -ve also but will take from end/
    console.log(buy);
    console.log(buy1);          
}

function replace_(){
    var food = "pizza,burger,pani-puri,chaat,BURGER";
    var buy = food.replace("burger","chicken-roll");    /1st para will which word, 2nd will to which word/
    console.log(buy);
}

function to_upper(){
    var str = "i am student.";
    var str1 = str.toUpperCase();
    console.log(str1);
}

function concat_(){
    var str1 = "My Name is ";
    var str2 = str1.concat("Aaqib.");
    console.log(str2);
}

function string_reverse(str){ 
    return str.split('').reverse().join('') 
 }

length();       /this is the name of the function/
index_of();
last_index_of();    /gives index from last /
search_();      /can search the indeax of first word if present /
slice_();       /can extract from string/
substring_();   /same as slice/
substr_();      /same as slice/
replace_();     /replaces the word from string but only first match/
to_upper();     /string changes to upper same as tolower/
concat_();      /concat the strings /
char_at();      /extract char frm a position/
split();        /split a string into array/
string_reverse();