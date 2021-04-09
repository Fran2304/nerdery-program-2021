const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.group(`${person.name}`);
//   console.log(person.cool);
//   console.log(person.country);
//   console.groupCollapsed(`${person.name}`);
// });

people.forEach((person, index) => {
  // console.groupCollapsed(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('DONE');
  // console.groupEnd(`${person.name}`);
  console.log(person.name);
});

console.table(people);

// console.table(people);
// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('All');
  console.log('Hey');
  console.warn('yuju');
  console.error('mi error');
  console.groupEnd('All');
}

function doctorize(name) {
  // console.count(`runing for doctorize`)
  return `Dr. ${name}`;
}

function greet(name) {
  // doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function boostrap() {
  console.log('hey I\'m not the error :) ');
  go();
}

// boostrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
