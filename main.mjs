import XReact from './XReact.js';

/** @jsx XReact.createElement */
const element = XReact.createElement(
    "div",
    {id: "header-container"} ,
    XReact.createElement("h2", {id: "header"}, "This is the header"),
    XReact.createElement("h3", {id: "sub-header"}, "This is a subheader")
);

console.log(element);

const container = document.getElementById('root');
XReact.render(element, container);