### Notes

#### Closures

Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

```javascript
function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}
var initialiseClosure = randomFunc(); // Returns a function
initialiseClosure(); 
```

#### Event loop

JS runtime model which is responsible for execution of code, handling events, web apis, and progressing queued sub-tasks in the stack.

Two main components - **Call Stack** and **Event Queue**.


- The call stack keeps track of the functions being executed at any given time.
- The event queue holds pending tasks or events to be processed.


- Two queues: `callback queue` (lower priority, web apis, events) , `microtask queue` (higher priority, promises)

- Event loops checks call stack > micro task queue > callback queue

#### Components
- `Call Stack`: Keeps track of function calls. When a function is invoked, it is pushed onto the stack. When the function finishes execution, it is popped off.
- `Web APIs`: Provides browser features like setTimeout, DOM events, and HTTP requests. These APIs handle asynchronous operations.
- `Task Queue (Callback Queue)`: Stores tasks waiting to be executed after the call stack is empty. These tasks are queued by setTimeout, setInterval, or other APIs.
- `Microtask Queue`: A higher-priority queue for promises and MutationObserver callbacks. Microtasks are executed before tasks in the task queue.
- `Event Loop`: Continuously checks if the call stack is empty and pushes tasks from the microtask queue or task queue to the call stack for execution.

### Homework

Call 
`
POST_URL = 'https://jsonplaceholder.typicode.com/posts';

COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments';

USER_URL = 'https://jsonplaceholder.typicode.com/users';
`
and create html cards with posts, user and comment details.

Also show different avatar for each user. Get it from `AVATAR_URL = 'https://robohash.org/'`


-----
Go through these questions

https://www.interviewbit.com/javascript-interview-questions/