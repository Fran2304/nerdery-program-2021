const textItem = document.querySelectorAll('.items');
console.log(textItem);
const imgs = document.querySelector('div img');
console.log(imgs);

const heading = document.querySelector('h2');
console.dir(heading);
// console.log(heading.textContent);
// console.log(heading.innerText);
// heading.textContent = 'Hey, modificaste el text content';
// console.log(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

const random = document.querySelector('.randomImg');
console.log(random);
random.classList.add('photo');
random.classList.remove('cool');

console.log(random.classList);
random.addEventListener('click', () => {
  random.classList.toggle('round');
  console.log(random.classList.contains('round'));
});
console.log(random.className);
random.alt = 'Random images';

random.addEventListener('load', () => {
  console.log(random.naturalWidth);
});

random.width = 700;

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  console.log(`Welcome ${custom.dataset.yap = 'gary'} ${custom.dataset.yum}`);
});
