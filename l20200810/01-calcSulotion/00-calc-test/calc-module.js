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

// export the class address
module.exports = Calculator;

// export object with property Calculator points to a class
// module.exports = { Calculator };

// export with name
// module.exports.calc  = Calculator ;