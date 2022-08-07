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

/* let obj = {};

for(let i = 1; i <= 5000000; ++i ) {
    obj["a"+i] = "test";
}

function isEmptyObject(o) {
    return getKeys(o).length === 0;
}

function getKeys(o) {
    return Object.keys(o);
} */

/* function isEmptyObject(o) {
    var b = true;
    for(let k in o) {
        b = false;
        break;
    }
    return b;
} */

//console.log(isEmptyObject(obj));

//class test
/* class Geoposition {
    constructor(coords, timestamp) {
        this.coords = coords;
        this.timestamp = timestamp;
    }
}; */

/* class Postion extends Geoposition {
    constructor() {
        super(new Coordinates2(), new Date().getTime());
    }
} */

const GeolocationPosition = function() {
    this.coords = new Coordinates2();
    this.timestamp = new Date().getTime();
}

/* GeolocationPosition.prototype = {
    coords: new Coordinates2(),
    timestamp: new Date().getTime()
} */

function Coordinates2() {
    this.acuuracy = 1;
	this.altitude = 2;
}

class Navigator2 {
	geolocation = {
		getCurrentPosition: function(callback) {
			callback(new GeolocationPosition());
		}
	}
};

/* function Geoposition() {
    this.coords = new Coordinates2();
    this.timestamp = new Date().getTime();
} */


const n = new Navigator2();
n.geolocation.getCurrentPosition((obj) => console.log(obj));

/* class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
    get area() {
      return this.height * this.width;
    }
    set sideLength(newLength) {
      this.height = newLength;
      this.width = newLength;
    }
  }
  
  var square = new Square(2);
  console.log(square); */