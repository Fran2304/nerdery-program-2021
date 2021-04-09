/* eslint-disable*/
console.log('it works');

let age;
console.log(age);
// var age = 10;
age=10;

sayHi();

function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

/* Hoisting en variables: el hoisting solo se aplica a la declaración, y no a su asignación. La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.*/