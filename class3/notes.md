### Topics
- JavaScript Intro
- Variables
- Comments
- Let, var, const
- Data types: Number, String, Boolean, Null, Undefined, Object, Array
- Functions
- Objects - Properties and methods
- Accessing object properties - Loop, Object.values(), JSON.stringify(), Object.entries()
- Adding and deleting properties from object.


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

- Built-in object types can be: `objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.`

### Homework

- Explore about Object constructors
- Create a guessing game. There would be a random target (between 1 to 100) and user has to in five attempts.
In each attempt you will tell to user if the guessed number is more or less than the target number.

Example:
target = 8
Guesses
15 -- greater
6 -- less
10 -- greater
8 -- guessed right