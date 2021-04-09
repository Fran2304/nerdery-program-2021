console.log('it works');
const mysection = document.querySelector('.mySection');
const p = document.createElement('p');
p.textContent = 'holiiiiiiiiiii';
mysection.appendChild(p);

// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

// Exercise
// const heading = document.querySelector('h2');
// const ul = document.createElement('ul');
// ul.innerHTML = `
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// `;

// heading.insertAdjacentElement('afterend', ul);

// Exercise using append and cloneNode

const ul = document.createElement('ul');
document.body.append(ul);

const list3 = document.createElement('li');
list3.textContent = 'three';
ul.insertAdjacentElement('afterbegin', list3);

const list1 = list3.cloneNode(true);
list1.textContent = 'one';
list3.insertAdjacentElement('beforebegin', list1);

const list5 = list3.cloneNode(true);
list5.textContent = 'five';
list3.insertAdjacentElement('afterend', list5);

const list2 = list3.cloneNode(true);
list2.textContent = 'two';
list3.insertAdjacentElement('beforebegin', list2);

const list4 = list3.cloneNode(true);
list4.textContent = 'four';
list3.insertAdjacentElement('afterend', list4);