class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    get add() {
        return this.a + this.b
    }
    get sub() {
        return this.a - this.b
    }
    get mul() {
        return this.a * this.b
    }
    get div() {
        return this.a / this.b
    }
}


const r = new Calculator(8, 8)['add']
console.log(r)

console.log((new Calculator(8,7)).mul)