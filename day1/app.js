// react in js

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

/**
 * 
 * <div id="parent">
    <div id="child">
        <h1>h1 tag created</h1>
        <h2>h2 tag created</h2>
    </div>
</div>
 * 
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "h1 tag created"), React.createElement("h2", { id: "heading2" }, "h2 tag created"), ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
