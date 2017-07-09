let obj = {
    a: 1,
    // b: 2,
    c: 3,
    d: {
        ene: 4,
        due: 5,
        rabe: 6
    }
};


let {
    a = 10,
    b: X = 42,
    c,
    d:
    {
        ene,
        due,
        rabe
    } = {}
} = obj || {};  // if obj is null or undefined

console.log(a, X, c, ene, due, rabe);
