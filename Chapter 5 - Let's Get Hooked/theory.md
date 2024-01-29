## Namaste React Course by Akshay Saini

# _Chapter 05 - Let's get Hooked_

### Theory explained the course

- Folder Structure
  - Use any folder structure don't overthink as react doesn't has any requirements.
  - Components is a common name used for different components.
  - use export command to export your component and then import it wherever it is used.
- File Name
  - Use Component Name with capital letter and camel case and use the function's name same.
  - you can use js, jsx, ts, tsx for the components which return jsx/tsx.
- Hard Coded data
  - Never keep hard coded data in your app
  - Common practise is to keep it in a utils or config or constants folders.
- Two ways to export and import
  - First as a default export.
    - e.g. export default `constant name` and import `constant name` from ..path
  - To export multiple things you have to use named export.
    - e.g. export function funcitonName(){}.
    - For a named export to import it use {around the imported material}
    - e.g. import {Component} from ..path
  - Even if you use both defaults in a page it will work.
- Always keep your code structured, try to not exceed any file of code more than 100 lines, just a tip and is a good practise.

#### Hooks

- A react hook is a pre-built js utility function written by Facebook developers, which we can use to do some tough things.
- Multiple functions but two very popular hooks - useState() and useEffect().
- useState() - A react hook for a state variable. Whenever a state variable updates, react rerenders the component. Used by array destructuring.
- Since it re-renders the dom when state changes the react is a super fast library.
- React Algorithm
  - `Reconciliation Algorithm` aka `react fiber` released in react v16
    - First let's see what is a virtual DOM? virtual DOM is a representation of actual DOM. It looks like an object.
    - virtual DOM is the object which get's created when react CreateElement runs.
    - This algorithm finds out the difference between updated new virtual DOM and previous old virtual DOM. It compare two objects and then updates it.
    - This is the reason react renders the component so quickly which leads it to be the best frontend library.
    - Does incermental rendering to split rendering work into small chunks and spread it out over multiple frames.

### References

- https://github.com/acdlite/react-fiber-architecture
