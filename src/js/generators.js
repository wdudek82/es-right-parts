function* main() {
    console.log('Hello');
    yield 10;
    console.log('World!');
}


// for (let i = 0; i < 10; i++) {
//     main().next();
// }

for (let v of main()) {
    console.log(v);
}


function* fact() {
    let n = 0;
    let result = 1;

    while (true) {
        yield [n, result];
        n++;
        result *= n;
    }
}


let factorial = fact();

let x, y;
for (let i = 0; i < 10; i++) {
    [x, y] = factorial.next().value;
    console.log(x, y);
}
