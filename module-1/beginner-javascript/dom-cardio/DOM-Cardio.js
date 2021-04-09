// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.append(myDiv);
// make an unordered list
const myList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const contentList = `
  <li>one</li>
  <li>two</li>
  <li>three</li>
`;
const myFragment = document.createRange().createContextualFragment(contentList);

myList.appendChild(myFragment);
// put that list into the above wrapper
const wrapper = document.querySelector('.wrapper');
wrapper.append(myList);
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://source.unsplash.com/random/300x300';
// set the width to 250
const width = 250;
myImg.src = `https://source.unsplash.com/random/${width}x250`;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
wrapper.append(myImg);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above.
const container = document.createElement('div');
container.innerHTML = `
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad neque, ratione numquam fugit  iure a architecto quis debitis dolore animi vero tempore sint at odio impedit laudantium   eligendi, veritatis dolorum?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad neque, ratione numquam fugit  iure a architecto quis</p>
`;
wrapper.insertAdjacentElement('afterbegin', container);
// add a class to the second paragraph called warning
container.lastElementChild.classList.add('warning');
// remove the first paragraph
container.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be
//  AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name, age, height) => {
  const cardBody = `<div class="playerCard">
       <h2>${name.toUpperCase()} — ${age}</h2>
       <p>They are ${height} and ${age} years old. In Dog years this person would be
       ${age * 7}. That would be a tall dog!</p>
     </div>
    `;
  return cardBody;
};
// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
const player1 = document.createRange().createContextualFragment(generatePlayerCard('Nancy', 21, 1.78));
const player2 = document.createRange().createContextualFragment(generatePlayerCard('Piero', 13, 1.62));
const player3 = document.createRange().createContextualFragment(generatePlayerCard('Sandra', 15, 1.60));
const player4 = document.createRange().createContextualFragment(generatePlayerCard('Kevin', 18, 1.80));
// append those cards to the div
cards.appendChild(player1);
cards.appendChild(player2);
cards.appendChild(player3);
cards.appendChild(player4);

// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttonDelete = document.createElement('button');
buttonDelete.innerHTML = 'Delete';
const playerCards = cards.querySelectorAll('.playerCard');

playerCards.forEach((card) => {
  card.appendChild(buttonDelete.cloneNode(true));
});

// select all the buttons!
const allButtons = cards.querySelectorAll('button');
// make out delete function
allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.currentTarget.parentNode.remove();
  });
});
// loop over them and attach a listener
