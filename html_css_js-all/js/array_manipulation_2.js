var arr = [
    {
        full_name : "Aaqib Gouher",
        age : 18
    },
    {
        full_name : "Nazish Fraz",
        age : 25
    }
];

var new_arr = [];

for(i in arr){
    new_arr[i] = arr[i].age;
}

console.log(new_arr);