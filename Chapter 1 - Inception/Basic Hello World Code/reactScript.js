const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
//createElement is React method and takes 3 arguments - react element(tag) name, empty object and the innerHTML(i.e. content)

const root = ReactDOM.createRoot(document.getElementById("root"));
//createRoot is a ReactDOM method and usually is in the index.html base file

root.render(heading);
//rendering the root with our heading

//creating a nested parent-child react element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "I am, an H1 tag!"),
    React.createElement("h2", { id: "heading2" }, "I am, an H2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "I am, an H1 tag!"),
    React.createElement("h2", { id: "heading2" }, "I am, an H2 tag!"),
  ]),
]);

console.log(parent);

root.render(parent);
