/**
 * Created by Jihann on 2015/9/23.
 */

//------------------查找元素位置
// 1 通过循环遍历数组
function indexOf(arr, item) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}
var result = indexOf([1, 2, 3, 4], 3);
console.log(result);

// 2 第二种做法
console.log([1, 2, 3, 4].indexOf(3));

//3 第三种做法
function indexofCall(arr, item){
    return Array.prototype.indexOf.call(arr, item);
}
console.log(indexofCall([1,2,3,4],3));
//---------------------------------------------------


//=================数组求和
//1
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1,2,3,4]));

//2
function sum2(arr){
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
}
console.log(sum([1,2,3,4]));

//移除元素,得到一个新数组
function remove1(arr, item) {
    var arrays = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            arrays.push(arr[i]);
        }
    }
    console.log('-------------before arr ' + arr);
    return arrays;
}
console.log(remove1([1,2,3,4,2],2));

//移除元素，直接在本数组中操作
function remove2(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
console.log(remove2([1, 2, 2, 3, 4, 2, 2], 2));

//向数组末尾添加元素，返回新数组
function add1(arr, item) {
    var array = arr.slice(0);
    console.log(arr);
    array.push(item);
    return array
}
console.log(add1([1, 2, 3, 4], 10));

//1 删除数组最后一个元素
function delLast(arr) {
    //slice会复制当前数组，不会修改原来数组的值
    var array = arr.slice(0, arr.length -1);
    //array.splice(arr.length -1, 1);
    console.log(arr);
    return array;
}
console.log(delLast([1, 2, 3, 4]));

//2 删除数组最后一个元素
function delLast2(arr) {
    var array = arr.slice(0);
    array.pop(); //会删除最后一个元素
    console.log(arr);
    return array;
}
console.log(delLast2([1, 2, 3, 4]));

//向数组开头添加元素,并且不修改原来数组
function addBefore(arr, item) {
    var arrays = arr.slice(0);
    arrays.unshift(item);
    console.log(arr);
    return arrays;
}
console.log(addBefore([1, 2, 3, 4], 10));

//1 向数组开头删除元素,并且不修改原来数组
function delBefore(arr) {
    var arrays = arr.slice(0);
    arrays.splice(0, 1);
    console.log(arr);
    return arrays;
}
console.log(delBefore([1, 2, 3, 4]));

//2 向数组开头删除元素,并且不修改原来数组
function delBefore(arr) {
    var arrays = arr.slice(0);
    arrays.shift();// 删除数组第一个元素
    console.log(arr);
    return arrays;
}
console.log(delBefore([1, 2, 3, 4]));

//合并两个数组
function concat(arr1, arr2) {
    var arrays = arr1.concat(arr2);
    console.log(arr1);
    console.log(arr2);
    return arrays;
}
console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 1]));

//正确使用parseInt
function parse2Int(num) {
    return parseInt(num, 10);
}
console.log(parse2Int('12'), parse2Int('12px'), parse2Int('0x12'));