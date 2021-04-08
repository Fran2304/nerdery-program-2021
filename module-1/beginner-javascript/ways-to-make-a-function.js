console.log('it does work');

// // Convert declarated function into arrow function

// // function add(a, b = 1) {
// //   const c = a + b
// //   return c
// // }


// const add = (a, b=1) => a+b


// // Convert declarated function with object into arrow function

// // function makeABaby(first, last){
// //   const baby = {
// //     name: `${first} ${last}`,
// //     age: 0
// //   }
// //   return baby
// // }

const makeABaby = (first, last) => ( {name: `${first} ${last}`, age: 0 });

// IIFE
(function(age) {
  console.log('loading');
  return `You are cool and age ${age}`;
})(10);

// Methods

const west = {
  name: 'Wes Bos',
  //method
  sayHi: function(time){
    console.log(`Hey ${this.name} ${time}`);
  },
  //shorhand method
  yellHi(){
    console.log(`Yujuu wess`)
  },

  //arrow function . EL this, aqui se va ir al objeto windows
  whisper: (time) => {
    console.log(`mmmm ${this.name} ${time}`)
  }
}


west.sayHi('morning');
west.yellHi('morning');
west.whisper('morning');

// Callback function

const button =  document.querySelector('.clickMe');

function handle(){
  console.log('you click me :)')
}
button.addEventListener('click', handle);

//timer callback

setTimeout(west.yellHi,1000);

