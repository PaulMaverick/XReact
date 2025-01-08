import XReact from './XReact.mjs';

/** @jsx XReact.createElement */
function App(props) {
  return XReact.createElement("h1", null, "Hi ", props.name);
}
const element = XReact.createElement(App, {
  name: "foo"
});

// const element = XReact.createElement(  
//     "div",
//     {id: "header-container"} ,
//     XReact.createElement("h2", {id: "header"}, "This is the header"),
//     XReact.createElement("h3", {id: "sub-header"}, "This is a subheader")
// );

const container = document.getElementById('root');
XReact.render(element, container);
