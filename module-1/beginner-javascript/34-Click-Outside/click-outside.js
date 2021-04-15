const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const desc = card.dataset.description;
  const name = card.querySelectorAll('h2').texContent;
  const imgSrc = card.querySelector('img').src;
  // card.setAttribute('data-greet', 'yuju'); Agrega dataset
  // populate the modal with new information
  modalInner.innerHTML = `
    <img width="600" height="600" src= "${imgSrc.replace('200', '600')}" alt="${desc}"/>
    <p>${desc}</p>
    `;
  // show modal
  modalOuter.classList.add('open');
}
cardButtons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  console.log(isOutside);
  if (isOutside) {
    modalOuter.classList.remove('open');
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
