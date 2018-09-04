// function range(start,end) {
//     var array = [];
//     for (var i=start; i<=end; i++) {
//         array.push(i);
//     }
//     return array;
// }
// console.log(range(1,10));

function sum(array) {
    var total = 0;
    for (var i=0; i<array.length; i++) {
        total +=array[i]
    }
    return total;
}
console.log(sum(range(1,10)));

function range(start,end,step) {
    var array = [];
    if (step == null) step = 1;
    if (step >0) {
        for (var i=start; i<=end; i+=step) {
            array.push(i);
        }
    } else {
        for(var i=start; i>=end; i+=step) {
            array.push(i);
        }
    }
    return array;   
}
console.log(range(1,10,2));
console.log(range(5,2,-1));
