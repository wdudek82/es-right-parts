// Symbol.iterator
// Symbol.toStringTag
// Symbol.toPrimitive
// Symbol.isConcatSpreadable

let arr = [1, 2, 3, 4];

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());

let str = 'hello!';
let it2 = str[Symbol.iterator]();

for (let letter of it2) {
    console.log(letter);
}


let it3 = str[Symbol.iterator]();

for (let i = 0; i < str.length + 1; i++) {
    console.log(it3.next());
}