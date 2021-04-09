console.log('it works');

const nice = document.querySelector('.nice');
// console.log(nice.innerText);

// console.log(nice.textContent);
console.log(nice.innerHTML);

const widht = 200;
const src = `https://source.unsplash.com/random/${widht}x200`;
const alt = 'random description';
const myHtml = `<div class="section">
<h2>text changed</h2>
<img src= ${src} alt=${alt}/>
</div>`;

// nice.innerHTML = myHtml;

// const myImg = document.querySelector('.section img');
// console.log(myImg);
// myImg.classList.add('round');

// Turn string into DOM element

//  a. use theese methods
const myFragment = document.createRange().createContextualFragment(myHtml);

// b. change classe, add events, ser attibutes, etc
const myheading = myFragment.querySelector('h2');
myheading.textContent = 'newwwwww';
console.log(myheading);

// c.  Insert in the Dom.
// nice.append(myFragment);
nice.appendChild(myFragment);
