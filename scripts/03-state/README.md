# Day 2

- Go through challenges from yesterday

## Structure of the Day
- Events & State

**Don't mention state until the State section!**

## Events [5 mins]
- Use `onClick` to make `Header` do something
- Explain that there's one for every event
- Can only add to HTML, not React components (where it would be a prop)

## Class Components [10 mins]
- Don't want inline event handlers
- Can use class methods
- Go through stateless -> class component transform

## State [30 mins]
- Now we've got an object, we can have local state
- Similar to state with DOM: long lived-variables (because event handlers are short-lived)
- `this.props` and `this.state`
- Initial state in the constructor: counter example
- Just a Plain Old JavaScript Object
- Have to use `setState()` so that React knows to re-render
- Careful about changing state by accident (`push`, `pop`, increment operator)
- Need to bind `this`
- Don't `console.log()` after `setState()`, it's delayed
- React Developer Tools: useful for seeing state
