class TestObj {
    constructor() {
        this.state = {
            active: 1
        };
    }

    foo(n) {
        if (n > 1) {
            return this.foo(n-1) * n;
        } else {
            return 1
        }
    };

    *bar() {
        let n = 1;
        while (true) {
            yield n++;
        }
    };
}


const instance = new TestObj();

let baz = instance.bar();

console.log(instance.foo(4));
console.log(instance.state);
console.log(baz.next().value);
console.log(baz.next().value);
console.log(baz.next().value);
console.log(baz.next().value);
console.log(baz.next().value);

