## Namaste React Course by Akshay Saini

# _Chapter 03 - Laying the Foundation_

### Theory explained the course

- Script Tags

  - add scripts in package.json to build and start.
  - use `npm run scriptname` to run the script

- Working of JSX behind scenes

  - React element is an javascript object which get rendered on the DOM by HTMLElement(render)
  - JSX is very different from HTML/XML in Javascript. JSX is HTML like syntax. JSX is a convention where we merge the HTML and JS together.
  - We use JSX to write code and send it to the react element and use it inplace of create react element. Makes code cleaner than writing create React Element function.
  - When you send the JSX element and send it using ReactDom to render it will consider it same as the object which createElement makes.
  - Makes work for deevlopers easy to understand, read and implement.
  - Javascript engine doesn't understands JSX it only understands Ecma Script (ES6 now) i.e. pure javascript. So for browser to understand it we use bundlers(parcel) which use a package called babel to transpile the code into an understanding JSX element.
  - Babel also transpiles/compiles the newer ES6 code for the older browsers since old browsers don't support ES6 latest versions.
  - Attributes in JSX is written using camel case.
  - If JSX consists of multiple lines then wrap it in a round brackets. In single line round brackets not mandatory.

- React Components
  - In a react webpage every major feature is a component
  - Types of Components
    - class based components (old and outdated)
    - functional components (new and most popular)
  - Functional Component is a function which returns a JSX or a react element.
  - Component Composition is a child component inside a parent component.
  - Other types of functions are also allowed but better practise is to write arrow functions for creation Functional Components in react.
  - Using parenthesis you can write javascript code in JSX

## References

- https://babeljs.io/
