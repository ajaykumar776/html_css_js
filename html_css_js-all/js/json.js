var data = '{ "first_name" : "nazish", "last_name" : "fraz" }';
data = JSON.parse(data);
console.log(data);

var students = '[{"first_name" : "nazish"}, {"first_name" : "aaqib"}]';
students = JSON.parse(students);
for(student of students){
    console.log(student.first_name);
}