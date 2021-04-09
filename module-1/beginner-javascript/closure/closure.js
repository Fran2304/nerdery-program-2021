/* eslint-disable */

// First example
// console.log('it does work');
// function outer() {
//   const outerVar = 'Hey I\'m an outer';
//   return function inner() {
//     const innerVar = 'Hey I\'m an inner';
//     console.log(outerVar);
//     console.log(innerVar);
//   };
// }

// const callOuter = outer();
// callOuter();

// Second example
/* That's basically how you invoke closures, the first time you call createGreeting you assign the value of "hello" to the parameter "greeting"

when you call sayHello('wes')  you're basically calling createGreeting twice, the first time passes the value to the parameter "greeting" and then inside sayHello you're passing the value to the inner function inside createGreeting

You can actually think of it this way createGreeting('Hello')('Wes') it does the same thing. The first set of parentheses invoke the outermost function and pass the value 'Hello' and the second set of parentheses invoke the inner function, thus, providing the value for the parameter 'name*/


function createGreeting(greet = '') {
  const myGreating = greet.toLocaleUpperCase();
  return function (name) {
    return `${myGreating} ${name}`;
  };
}

const sayHello = createGreeting('HOLIII');
console.log(sayHello('Fran'));

// Third example. Closures are used for private varibles, functions building (to have similar functions )

function createGame(game) {
  let score = 0;
  return function win() {
    score++
    return `Score in ${game} is ${score}`
  }
}

// mismo ejemplo pero pasando score como parametro :) 
const soccerScore = createGame('soccer');
console.log(soccerScore());
console.log(soccerScore());

function createGamewitScore(game) {
  let myGame = game;
  return function win(score) {
    return `Your score in ${game} is ${score}`
  }
}

const mySoccerScore = createGamewitScore('soccer');
console.log(mySoccerScore('1'));


const myVoleyScore = createGamewitScore('voley');
console.log(myVoleyScore('10'));
