var a = 5;
var b = 8;

var temp = a;
console.log("Before Swap: ", "a =", a , "b =", b);
a = b;
b = temp;
console.log("After Swap: ", "a =", a , "b =", b);

var p = 6;
var q = 9;
console.log("Before Swap: ", "p =", p , "q =", q);
p = p + q;
q = p - q;
p = p - q;
console.log("After Swap: ", "p =", p , "q =", q);

var x = 16;
var y = 10;
console.log("Before Swap: ", "x =", x , "y =", y);
[x, y] = [y, x];
console.log("After Swap: ", "x =", x , "y =", y);
