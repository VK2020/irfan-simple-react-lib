# irfan-simple-react-lib

> simple library to test

[![NPM](https://img.shields.io/npm/v/irfan-simple-react-lib.svg)](https://www.npmjs.com/package/irfan-simple-react-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save irfan-simple-react-lib
```

## Usage

```jsx
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
```

## License

MIT © [irfangg](https://github.com/irfangg)
