let x = [1,2,3];
let y = [4,5];
let z = [0, ...x, ...y];
let [p,,,,q,] = z;

console.log(z);
console.log(p, q);


function foo(x, y, ...rest) {
    return [x, y, rest];
}

console.log(foo(...x, ...y));

console.log([...'Hello, World!']);