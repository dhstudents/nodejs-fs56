let o

let f = (function () {
    let x = 10;
    o = { count: x };
}
)
f.call();
console.log(o)