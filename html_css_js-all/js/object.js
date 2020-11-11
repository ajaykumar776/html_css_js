var student = {
    first_name: "nazish",
    last_name: "fraz",
    age: 25,
    full_name : function(){
        return this.first_name + " " + this.last_name;
    }
};

console.log(student);
console.log(student.first_name);
console.log(student["first_name"]);
console.log(student.first_name + " " + student.last_name);
console.log(student.full_name());

for(i in student){
    console.log([i, student[i]]);
}