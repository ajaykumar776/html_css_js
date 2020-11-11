var students = [
    {
        first_name : "nazish",
        last_name : "fraz",
        age : 25
    },
    {
        first_name : "aaqib",
        last_name : "gouher",
        age : 19
    }
];

console.log(students);
console.log(students[1]);
console.log(students[1]["first_name"]);     /can also access the students array first_name object value/
console.log(students[1].first_name);         /same as the above /

students.forEach(function(value, index){    /foreach call back function /
    console.log(value);
    for(obj in value){              /loops through the property of an object/
        console.log([obj, value[obj]]);         
    }
})