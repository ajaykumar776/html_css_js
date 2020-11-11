var str = "My Name is Aaqib";
var length = str.length;        /length is not a function, its a property/
var index_of_is = str.indexOf("is");    /gives the first occurence index,we can also use lastindextof().    /


console.log(length);
console.log(index_of_is);
console.log(str.search("is"));   /gives the index correct if present, else gives -1/