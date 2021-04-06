console.log('it does work');

// Convert declarated function into arrow function

// function add(a, b = 1) {
//   const c = a + b
//   return c
// }


const add = (a, b=1) => a+b


// Convert declarated function with object into arrow function

// function makeABaby(first, last){
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }

const makeABaby = (first, last) => ( {name: `${first} ${last}`, age: 0 })