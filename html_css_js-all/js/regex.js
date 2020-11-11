var str = "nazish007_";
var re = /^n[a-z0-7]+_$/g;
if(re.test(str)) console.log("matched");
else console.log("not matched");