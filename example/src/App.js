import React from "react";

import { ExampleComponent, Chart, Buttons } from "irfan-simple-react-lib";
import "irfan-simple-react-lib/dist/index.css";

const App = () => {
  return (
    <div>
      <details>
        <summary>simple component</summary>
        <ExampleComponent text="Create React Library Example 😄" />
      </details>

      <details>
        <summary>Buttons component</summary>
        <Buttons />
      </details>
      <Chart />
    </div>
  );
};

export default App;
