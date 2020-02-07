# Day 1: Morning

## JS Recap [10 mins]

- Demonstrate with Node
- Audience participation
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


## React [5 mins]

- What is React
- Makes DOM nice
- For building UIs
- Not a framework
- Also be using Axios, Redux, ReactRouter
- Can't built a full app until we learn Redux, so for now just building stand-alone components
- Overkill to use for basic websites

### Scaffolding [10 mins]

- **Tell them not to follow along**
- `npm init react-app project-name`
- Show app running
- Using Babel, Webpack, ESLint
- Show that changes update things
- Show that errors
- Quickly look at directory structure

### JSX [30-45 mins]

- **Emphasise that we're still just doing JavaScript**: JSX is on top of it
- Components: one per UI element
- Components can have sub-components
- Top level component: `App` in this setup (show `index.js`)
- Change App to `<h1>Hello, world</h1>` with stateless component

   ```js
    let App = () => {
        return <h1>Hello, world</h1>;
    };
    ```
- What is a templating language?
    - way to generate one sort of code from another
- JSX specifics: camel-case attributes, `className`, moustaches
- Under-the-hood: just creating classes and using DOM - `React.createElement("h1", {}, "Hello, world")`
- Use bootstrap: add to `index.html`
- CSS-in-JS
- Sub-components: create a `<Header>`, use in `App`
- Quickly mention `import` & `export`: modern JS (not React specific)
- Show console messages
- Content component: see `Content.js`
- Pull out JS: `const formatted = valuation.toLocaleString( "en-GB", { style: "currency", currency: "GBP" });`
- Use `<Content>` in `App`: need to use `<>`/`</>`
- Split out `Funding`, then use in `Header`
- `Pagination` for `.map()`: see `Pagination.js`
- `key` attribute
