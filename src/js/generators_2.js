let obj = {
    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i++) {
            yield this.values[i];
        }
    },
    values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
    start: 4,
    end: 13
};


let vals = [ ...obj ];

console.log(vals);

