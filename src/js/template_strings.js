let es6 = 'EcmaScript 2015';
let templateString = `This is some \
multiline string example of
${es6} string interpolation`;

console.log(templateString);


function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
}

let msg = foo`This is ${es6} temple tag`;
