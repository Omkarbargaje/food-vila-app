const heading1 = React.createElement("h1", {
    id: "heading 1"
}, "heading 1");
const heading2 = React.createElement("h2", {
    id: "heading 2"
}, "heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element into the root
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
