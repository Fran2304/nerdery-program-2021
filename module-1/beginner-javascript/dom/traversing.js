console.log('it works');

const fran = document.querySelector('.fran');

console.log(fran.children);
console.log(fran.firstElementChild);
console.log(fran.lastElementChild);
console.log(fran.previousElementSibling);
console.log(fran.nextElementSibling);
console.log(fran.parentElement);

const p = document.createElement('p');
p.textContent = 'Delete this p. Ajá';

document.body.append(p);

// Removing. P will be deleted from dom but i will be still in the js memory

p.remove();

console.log(p);
