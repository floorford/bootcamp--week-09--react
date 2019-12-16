# Day 1: Morning

## JS Recap

- Types of things
    - Numbers
    - Strings
    - Booleans
    - Arrays
    - Objects
    - Functions
- What's a function?
    - Call it
    - Takes arguments
    - Returns a value
- Array notation
    - Map, filter, reduce
- Object notation
    - Destructuring
- Classes

## React
- What is React
- Makes DOM nice
- For building UIs
- Not a framework
- Also be using Axios, Redux, ReactRouter
- Can't built a full app until we learn Redux, so for now just building stand-alone components
- Overkill to use for basic websites

### Scaffolding
- `npm init react-app project-name`
- Show app running
- Using Babel, Webpack, ESLint
- Show that changes update things
- Show that errors
- Quickly look at directory structure

### JSX
- **Emphasise that we're still just doing JavaScript**: JSX is on top of it
- Components: one per UI element
- Components can have sub-components
- Top level component: `App` in this setup
- Rename `App.js` to `App.jsx`
- Change App to `<h1>Hello, world</h1>` with stateless component
- Templating languages overview
- JSX specifics: camel-case attributes, `className`, moustaches
- Under-the-hood: just creating classes - `React.createElement("h1", {}, "Hello, world")`
- Use bootstrap
- CSS-in-JS
- Sub-components: create a header, use in `App`
- Quickly mention `import` & `export`
- Show console messages
- Content component
- Pull out JS: `const formatted = valuation.toLocaleString( "en-GB", { style: "currency", currency: "GBP" });`
- Use in `App`: need to use `Fragment`
- Split out `Funding`, then use in `Header`
- `Pagination` for `.map()`
- `key` attribute
