// fix number of parameters
const makeArray = (p1, p2, p3) => {
    return [p1,p2,p3]
}

// dynamic number of parameters
const make_Array = (...args) => {
    return args
}


const a1 = make_Array(1, 2, 3)
console.log(a1)
const a2 = make_Array(1,2,3,4)
console.log(a2)



