/* let arr = [];

for(var i = 0; i < 5000000; ++i) {
    arr[i] = "ABC";
}

arr[arr.length] = "BBB";
let bool = false; */

/* var arr = ["a", "b", "c", "d"];
var url = "";
url = arr.reduce(function(a,b,c) {
    return a + (c === 0 ? "?" : "&") + b + '=' + "AAA";
}, url);

console.log(url); */

/* for(i = 0; i < arr.length; ++i) {
    if(new RegExp("^" + arr[i] + "$", 'gi').test("BBB")) {
        bool = true;
        break;
    }
} */

/* for(i in arr) {
    if(new RegExp("^" + arr[i] + "$", 'gi').test("BBB")) {
        bool = true;
        break;
    }
} */

/* bool = arr.reduce(function(a, b) {
    if(new RegExp("^" + b + "$", 'gi').test("BBB")) a = true;
    return a;
}, false); 

console.log(bool);
*/

let obj = {};

for(let i = 1; i <= 5000000; ++i ) {
    obj["a"+i] = "test";
}

function isEmptyObject(o) {
    return getKeys(o).length === 0;
}

function getKeys(o) {
    return Object.keys(o);
}

/* function isEmptyObject(o) {
    var b = true;
    for(let k in o) {
        b = false;
        break;
    }
    return b;
} */

console.log(isEmptyObject(obj));