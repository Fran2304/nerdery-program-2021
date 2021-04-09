// Exercise 1
let hash = '';

for (let i = 1; i <= 7; i += 1) {
  if (hash.length < i) {
    hash += '#';
    console.log(hash, i);
  }
}

// Exercise 2
for (let i = 1; i <= 100; i += 1) {
  // console.log(i);
  if (((i % 3) === 0) && ((i % 5) === 0)) {
    console.log('FizzBuzz');
  } else if ((i % 3) === 0) {
    console.log('Fizz');
  } else if ((i % 5) === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Exercise 3
let chess = '';
const squares = 8;

for (let vertical = 0; vertical < squares; vertical += 1) {
  for (let horizontal = 0; horizontal < squares; horizontal += 1) {
    if ((vertical + horizontal) % 2 === 0) {
      chess += ' ';
    } else {
      chess += '#';
    }
  }
  chess += '\n';
}

console.log(chess);