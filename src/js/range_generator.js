let range = {
    *[Symbol.iterator](start = 0, stop = 101, step = 1) {
        for (let i = start; i < stop; i += step) {
            yield i;
        }
    }
};


let newRange = [ ...range ];

console.log(newRange);