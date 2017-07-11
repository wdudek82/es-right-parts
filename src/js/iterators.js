let obj = {
    [Symbol.iterator]() {
        let ind = this.start;
        let en = this.end;

        let it = {
            next: () => {
                if (ind <= en) {
                    let v = this.values[ind];
                    ind++;
                    return { value: v, done: false };
                } else {
                    return { done: true };
                }
            }
        };

        return it;
    },
    values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    start: 4,
    end: 13
};


let vals = [ ...obj ];
console.log(vals);
console.log(vals);