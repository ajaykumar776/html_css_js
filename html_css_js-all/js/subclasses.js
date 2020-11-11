class Rectangle{
    constructor(l, b){
        this.l = l;
        this.b = b;
    }

    get_area(){
        return this.l * this.b;
    }
}

class Square extends Rectangle{
    constructor(s){
        super(s, s);
    }
}

var r = new Rectangle(2,3);
console.log([r.l, r.b]);
console.log(r.get_area());

var s = new Square(2);
console.log(s.get_area());