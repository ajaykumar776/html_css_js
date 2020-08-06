function reverse(str)
{
    str=str+"";
    return str.split("").reverse().join("");
}
console.log(reverse("123345"));