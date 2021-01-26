var marks = [55, 65, 47, 85, 75, 99, 72, 92, 59, 68];
function arraysum(n){
    var sum = 0;
    for(var i = 0; i < n.length; i++){
        sum = sum + n[i];
    }
    return sum;
}
var result = arraysum(marks);
console.log("Total = " , result);