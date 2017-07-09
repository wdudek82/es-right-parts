function foo([a, b, c] = []) {
    console.log(a, b, c);
}

foo([1, 2, 3]);


function foo2( {a, b = 10, c} = {} ) {
    console.log(a, b, c);
}

foo2({a: 1, c: 3});