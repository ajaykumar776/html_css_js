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

for(i in arr){
    var name = arr[i].full_name.split(" ");
    arr[i]["f_name"] = name[0];
    arr[i]["l_name"] = name[1];
}

console.log(arr);