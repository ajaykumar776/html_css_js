class Person{
    constructor(name){
        this.name = name;
    }

    get_name(){
        return this.name;
    }

    static display(){
        return "nazish";
    }
}

var p = new Person("nazish");
console.log(p.get_name());

console.log(Person.display());