import XReact from './XReact.mjs';

/** @jsx XReact.createElement */
// function App(props) {
//     return (
//         <div>
//             <h1>Hi {props.name}</h1>
//             <Counter />
//         </div>
//     )
// }

function Counter() {
    const [state, setState] = XReact.useState(1);

    return (
        <h1 onClick={() => setState(c => c + 1)}>
            count: {state}
        </h1>
    )
}

const element = <Counter />

// const element = XReact.createElement(
//     "div",
//     {id: "header-container"} ,
//     XReact.createElement("h2", {id: "header"}, "This is the header"),
//     XReact.createElement("h3", {id: "sub-header"}, "This is a subheader")
// );

const container = document.getElementById('root');
XReact.render(element, container);