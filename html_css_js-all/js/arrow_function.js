var name = function get_name(){
    return "nazish";
}
var name_arrow = () => {
    return "nazish";
}
var name_arrow = () => "nazish";

console.log(name());
console.log(name_arrow());

var sq = function get_sq(n){
    return n*n;
}
var sq_arrow = (n) => {
    return n*n;
}
console.log(sq(2));
console.log(sq_arrow(2));