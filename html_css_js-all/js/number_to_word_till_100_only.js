function count_digit(n){
    var str = n.toString();
    return str.length;
}

function to_word(n){
    var ones = {0:"zero",1:"one", 2:"two", 3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
    var tens = {10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen", 20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninty"}
    var hundred = {100:"Hundred"};
    var i=0,j=0,str = "",x = 0,y = 0,str_1 = "",str_2 = "";

    if(count_digit(n) == 1){
        return ones[n];
    }
    else if(count_digit(n) == 2){
        i = 0;
        
        for(i in tens){
            if(i == n){
                return tens[i];
                break;
            }
        
            else {
                i = 0;
                str = n.toString();
                x = +(str[1]);
                y = +(str) - x;

                for(i in tens){
                    if(y == i){
                        str_1 = tens[i];
                        break;
                    }
                }

                for(j in ones){
                    if(x == j){
                        str_2 = ones[j];
                    }
                }

                return str_1.concat(" ",str_2);

            }
        }
    }
    else{
        i = 0;
        for(i in hundred){
            if(n == i){
                return hundred[i];
                break;
            }
        }
    }
}

n = 12;
var count = count_digit(n);
var word = to_word(n);

console.log(word);


