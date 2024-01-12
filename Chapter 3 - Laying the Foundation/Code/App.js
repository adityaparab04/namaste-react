import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));

const heading = React.createElement(
  "h1",
  { id: "heading1", tabIndex: 0 },
  "This is from React create element"
);

const headingJSX = (
  <h2 className='heading2' tabIndex={1}>
    This is from JSX Element
  </h2>
);

// functional component
const HeadingJSX = () => (
  <h2 className='heading1' tabIndex={1}>
    This is from JSX Functional Component
  </h2>
);

const HeadingComponent = () => {
  return (
    <div>
      <h1 className='heading2' tabIndex={1}>
        This is from functional component
      </h1>
      <HeadingJSX />
    </div>
  );
};

console.log(headingJSX);
console.log(heading);
console.log(HeadingComponent());

root.render(heading);
root2.render(headingJSX);
root3.render(<HeadingComponent />);
