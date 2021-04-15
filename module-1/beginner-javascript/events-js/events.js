/* eslint-disable func-names */
console.log('it works');

const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');
console.log(butts);

// one way. NOT DRY
// butts.addEventListener('click', () => {
//   console.log('It got clicked!');
// });
// / cool.addEventListener('click', () => {
//   console.log('It got clicked!');
//    });

// one way. better way, we avoy Dry
function handleClick() {
  console.log('It got clicked!');
}

butts.addEventListener('click', handleClick);
// other way arrow function

const hooray = () => console.log('HOORAY!');
cool.addEventListener('click', hooray);

// Remove event Listener: Only for named functions or arrow functions stored in variables. Iin these cases there references
// butts.removeEventListener('click', handleClick);

// Listening for events with multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem(params) {
  console.log('Buying item');
}
console.log(buyButtons);

// eslint-disable-next-line func-names
// eslint-disable-next-line prefer-arrow-callback
buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', buyItem);
});

// or

// function handleBuyButtonClick(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);

// or arrow functions

// buyButtons.forEach((buyButton) => {
//   buyButton.addEventListener('click', buyItem);
// });
