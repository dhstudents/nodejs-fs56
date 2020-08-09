let o

let f = (function () {
    let x = 10;
    o = { count: x };
}
)
f.call();
console.log(o)


// https://stackoverflow.com/questions/332872/encode-url-in-javascript
// https://stackoverflow.com/questions/75980/when-are-you-supposed-to-use-escape-instead-of-encodeuri-encodeuricomponent