const heading = React.createElement("h1", {}, "Hello World from React"); 
//createElement is React method and takes 3 arguments - element(tag) name, empty object and the innerHTML(i.e. content)

const root = ReactDOM.createRoot(document.getElementById("root"));
//createRoot is a ReactDOM method and usually is in the index.html base file

root.render(heading);
//rendering the root with our heading