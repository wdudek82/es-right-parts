import deepfreeze from 'deepfreeze';

$(document).ready(function() {
    for (let i = 0; i < 5; i++) {
        $('#btn' + i).click(function() {
            console.log("button '" + i + "' clicked!");
        });
    }
});


let arr = deepfreeze([1, 2, 3, [4, 5, 6]]);

// arr[3][1] = 10;

console.log(arr);

function required(param) {
    throw 'Parameter "' + param + '" required!';
}

function foo(id = required('id'), x = id) {
    console.log(id, x);
}

// foo();

function gather(...args) {  // rest operator
    console.log(...args);  // spread operator
}

gather(1,2,3);
