const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World from React!',
);

// nested element

const parentElement = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'A Nested Element - h1'),
    React.createElement('h2', {}, 'A Nested Element - h2'),
    React.createElement('h3', {}, 'A Nested Element - h3'),
    React.createElement('h4', {}, 'A Nested Element - h4'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'A Nested Element - h1'),
    React.createElement('h2', {}, 'A Nested Element - h2'),
    React.createElement('h3', {}, 'A Nested Element - h3'),
    React.createElement('h4', {}, 'A Nested Element - h4'),
  ]),
  React.createElement('div', { id: 'child3' }, [
    React.createElement('h1', {}, 'A Nested Element - h1'),
    React.createElement('h2', {}, 'A Nested Element - h2'),
    React.createElement('h3', {}, 'A Nested Element - h3'),
    React.createElement('h4', {}, 'A Nested Element - h4'),
  ]),
]);

console.log(parentElement);
console.log(heading); // a react element ==> JS Object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parentElement);
