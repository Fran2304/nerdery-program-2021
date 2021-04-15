const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('Binding the buy button');
  console.log(parseFloat(event.target.dataset.price));
  console.log(event.target, 'target');
  console.log(event.currentTarget);
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
