var arr = [1,1,2,2,2,2,2,3,3,3,3,4,4,4,4,1];
var obj = {};

for(i of arr){
    if(i in obj) obj[i]+=1;
    else obj[i] = 1;
}

console.log(obj);