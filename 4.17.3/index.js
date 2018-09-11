// var list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// }

// 编写函数arrayToList，当给定参数[1,2,3]时，建立一个和示例相似的数据结构
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

// 编写函数listToArray，将列表转换成数组
function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

// 编写工具函数prepend,接受一个元素和一个列表，然后创建一个新的列表，将元素添加到输入列表的开头
function prepend(value,list) {
    return {value: value, rest: list};
}

// 编写一个函数nth，接受一个列表和一个数，并返回列表中指定位置的元素，如果该元素不存在则返回undefined
function nth(list, n) {
    if (!list)
    return undefined;
    else if(n == 0)
    return list.value;
    else
    return nth(list.rest,n-1);
}

console.log(arrayToList([10,20]));

console.log(listToArray(arrayToList([10,20,30])));

console.log(prepend(10,prepend(20,null)));

console.log(nth(arrayToList([10,20,30]),2));