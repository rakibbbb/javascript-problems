var token = [55, 65, 72, 85, 75, 99, 72, 65, 59, 68];
var uniqueName = [];

for(var i = 0; i < token.length; i++){
    var element = token[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
