import App from "./App";
import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { colors } from "./components/utils/_var";
import { injectGlobal } from "styled-components";

// global styles
injectGlobal`
  body {
    background-color: white;
  
  }
`;

render(<App />, document.getElementById("root"));
registerServiceWorker();
