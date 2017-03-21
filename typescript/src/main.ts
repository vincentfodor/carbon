import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./views/hello";

ReactDOM.render(
  React.createElement(Hello, {}),
  document.getElementById("app")
);

/* import { sayHello } from "./views/greet"; */
/*  */
/* function showHello(divName: string, name: string) { */
/*   const elt = document.getElementById(divName); */
/*   elt.innerText = sayHello(name); */
/* } */
/*  */
/* showHello("app", "TypeScript"); */
