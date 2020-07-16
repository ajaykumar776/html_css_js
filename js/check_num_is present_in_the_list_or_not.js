function test_dgt(x,y,n)
{
    if(n<x || n>y)

        return false;
    else
       if(n>=x&&n<=y)

            return true;
    else
        false;
}
console.log(test_dgt(30,1000,5));

