### Topics

- `this` keyword
- Arrow functions
- Classes
- `setInterval`, `clearInterval`, `setTimeout`, `clearTimeout`
- Asynchronous JS

#### `this` keyword
In JavaScript, the `this` keyword refers to an object.

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object.
- In a function, in strict mode, `this` is undefined.
- In an event, `this` refers to the element that received the event.
- Methods like `call()`, `apply()`, and `bind()` can refer th`is to any object.

- With arrow functions there are no binding of `this`.
- In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
- With arrow functions the this keyword always represents the object that defined the arrow function

#### Others

- `setInterval` keep running at a gap of provided time.
- `setTimeout` runs only once after a gap of provided time.


### Homework

- Fetch posts from `https://jsonplaceholder.typicode.com/posts` and display in html file