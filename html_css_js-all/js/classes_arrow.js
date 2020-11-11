class Perimeter{
    constructor(sides){
        this.sides = sides;
    }

    get(){
        return this.sides.reduce(function(prev, current){
            return prev + current;
        });
    }

    // get(){
    //     return this.sides.reduce((prev, current) => {
    //         return prev + current;
    //     });
    // }
}

var p = new Perimeter([1,2,3,4,5]);
console.log(p.get());