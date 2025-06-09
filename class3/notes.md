### Topics
- JavaScript Intro
- Variables
- Comments
- Let, var, const
- Data types: Number, String, Boolean, Null, Undefined, Object, Array


### Notes
- Names can begin with $ and _
- JavaScript identifiers are case-sensitive.
- Variables without value will have `undefined` value.

| Feature	| var	 | let |	const |
| ------- |----- | ----| ------- |
| Scope |	Function-scoped	| Block-scoped |	Block-scoped |
| Hoisting |	 Yes |	 Yes |	 Yes |
| Initial Value on Hoist |	undefined | Not initialized (TDZ*) |	 Not initialized (TDZ*) |
| Can be Re-declared |	 Yes |	 No |	 No |
| Can be Re-assigned|  Yes |	 Yes |	 No |
| Mutable Contents |	 Yes |	 Yes |	 Yes (but cannot reassign object) |
|Best Use |	Legacy code (avoid in ES6+)	| For variables that change |	For constants / fixed bindings |

- Hoisting is JavaScript's default behavior of moving declarations to the top.
- Variables defined with `let` and `const` are hoisted to the top of the block, but not initialized. The variable is in a "temporal dead zone" from the start of the block until it is declared
- JavaScript only hoists declarations, not initializations.

#### `this` keyword
In JavaScript, the `this` keyword refers to an object.

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object.
- In a function, in strict mode, `this` is undefined.
- In an event, `this` refers to the element that received the event.
- Methods like `call()`, `apply()`, and `bind()` can refer th`is to any object.