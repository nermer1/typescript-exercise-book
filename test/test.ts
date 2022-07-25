/* function identity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
} */


/* function identity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
} */

//identity(["1"]);

// 제네릭 타입
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity