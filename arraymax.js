var marks = [55, 65, 47, 85, 75, 99, 72, 92, 59, 68];

var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = marks[i];
    }    
}
console.log(max);