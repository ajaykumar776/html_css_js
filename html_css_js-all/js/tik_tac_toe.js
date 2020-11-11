class TikTacToe{
    constructor(){
        this.arr = [];
        this.arr.push(["-","-","-"]);
        this.arr.push(["-","-","-"]);
        this.arr.push(["-","-","-"]);
        this.count = 0;
        this.row = null;
        this.column = null;
        this.$x_count = 0;
        this.$0_count = 0;
    }
   
    is_win(){
        var all_possible =  [
            [0,0,0,1,0,2],[1,0,1,1,1,2],[2,0,2,1,2,2],
            [0,0,1,0,2,0],[0,1,1,1,2,1],[0,2,1,2,2,2],
            [0,0,1,1,2,2],[0,2,1,1,2,0]
        ];


    }

    is_index_exist(){
        var flag = 0;
        for(var i in this.arr){
            if(this.arr[this.row-1][this.column-1] == 'x' || this.arr[this.row-1][this.column-1] == '0') flag = 1;
        }
    
        if(flag) return true;
        else return false;
    }

    print(){

        process.stdout.write("\n");

         for(var i in this.arr){
            console.log(`${this.arr[i][0]} ${this.arr[i][1]} ${this.arr[i][2]}`)
        }
        process.stdout.write("\n");
    }

    insert(){
        if(this.count % 2 == 1){
            this.arr[this.row-1][this.column-1] = "x";
            this.print();
            this.$x_count ++;
            // console.log(this.$x_count);
        }
        else{
            this.arr[this.row-1][this.column-1] = "0";
            this.print(); 
            this.$0_count ++;
            // console.log(this.$0_count);
        }
        
    }

    start(){
        console.log("Game Started ..");
        // for(var i in this.arr){
        //     console.log(`${this.arr[i][0]} ${this.arr[i][1]} ${this.arr[i][2]}`)
        // }
    }

    restart(){

    }

    // x and y are tik tac toe cordinates 1-index
    // there is a 3x3 matrix (or array 2d) but i will pas x an y as index 1
    turn(x, y){
        if(x <= 3 && y <= 3){
            this.row = x;
            this.column = y;
            // this.insert();
            if(this.is_index_exist()){
                console.log("Index has already taken..");
            }
            else{
                this.count ++;
                this.insert();
                
                // console.log("Not exist");
            }
        }
        else{
            console.log("Index is Invalid..");
        }
    }

    // show(){
    //     console.log(`x = ${this.$x_count} and 0 = ${this.$0_count}`);
    // }
}

var t = new TikTacToe();

t.start();
// game started

t.turn(9, 9);
// index is invalid

t.turn(2,2);
// - - -
// - X -
// - - -

t.turn(1,1);
// O - -
// - X -
// - - -

t.turn(1,1);
// // already filled

t.turn(3,1);
// O - -
// - X -
// X - -

t.turn(1,2);
// O O -
// - X -
// X - -

t.turn(1,3);
// O O X
// - X -
// X - -
// player X won

// t.turn(1,3);
// game over please restart

// t.restart();
// game started
// t.show();