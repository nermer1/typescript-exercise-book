let arr = [];

for(var i = 0; i < 5000000; ++i) {
    arr[i] = "ABC";
}

arr[arr.length] = "BBB";
let bool = false;

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
}, false); */

console.log(bool);
