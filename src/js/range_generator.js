// let range = {
//     *[Symbol.iterator](start = 0, stop = 101, step = 1) {
//         for (let i = start; i < stop; i += step) {
//             yield i;
//         }
//     }
// };

function* range(start = 0, stop = 101, step = 1) {
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

let newRange = [ ...range(5, 50, 4) ];

console.log(newRange);