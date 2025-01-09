XREACT.JS

    - XReact.js is a custom implementation of React, built to better understand how React works under the hood. This project covers essential concepts like rendering DOM elements, virtual DOM, reconciliation, components, state, and hooks.

    - This project was inspired by Pomber's blog and follows a step-by-step approach to recreate the core features of React.


-   Project includes:
        rendering DOM elements
        element creations
        Virtual DOm
        reconcillation
        Components
        States
        Hooks

    Usage
        Transpiling JSX
            The main file (main.mjs) uses JSX syntax, which needs to be transpiled into plain JavaScript. This is handled using Babel.

        To transpile the code, run:
            npm run compile

        This will output a transpiled file named main.transpiled.mjs, which can be used in the browser.