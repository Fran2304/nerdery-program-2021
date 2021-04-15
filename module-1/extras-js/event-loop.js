const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'), 1000);
const baz = () => console.log('Third');

bar();
foo();
baz();
foo();
foo();
foo();
foo();
