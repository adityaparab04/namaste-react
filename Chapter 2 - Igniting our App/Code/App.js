import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "Heading 1"),
  React.createElement("h2", { id: "heading2" }, "Heading 2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
