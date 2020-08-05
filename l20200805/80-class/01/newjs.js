// dynamic number of parameters
// [] {} -spread
// () - rest
//==================================
const member = {
    name: 'Bill',
    age: 34,
    status: 'single',
}
// object
// const printName = o => console.log(o.name)
// printName(member)
// const print_Name = ({ name }) => console.log(name)
// print_Name(member)
// const { name, age : myage } = member;


// array
const measures = [43, 67, 54, 12, 81 , 18]
//let [jan, feb] = measures;
//console.log(jan, feb)

//let [  ,  , mar , apr] = measures;
//console.log( mar , apr)

let [ ,  ,  , ...q2] = measures;
console.log( q2)



