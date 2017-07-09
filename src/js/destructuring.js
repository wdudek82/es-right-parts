let arr = [1, 2, 3, 4, [5, 6, 7]];

let a, b, c, d, args, e, f, g;

[a, b,,,...args] = arr;

console.log(a, b, args);

[a, b,,,[e, f, g]] = arr;

console.log(a, b, e, f, g);


var x = [ a, b ] = arr;

console.log(x);


[ ,,, c, d ] = [ a, b, ...args ] = arr;

console.log(c, d);
console.log(a, b, args);