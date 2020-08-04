// copy array
const hobbies = ['Cooking' , 'Fishing' , 'Surfing']
const h2 = hobbies.slice();
const h3 = [...hobbies];


// copy object
const member = {
    name: 'Bill',
    age: 34,
    status: 'single',
}

const m1 = {...member}
console.log(m1)

