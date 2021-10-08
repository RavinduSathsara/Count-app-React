import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  function goRight() {
    setCount(count + 1);
  }

  function goLeft() {
    setCount(count - 1);
  }

  function middle() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Count App</h1>
      <span>{count}</span>
      <hr />
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={goLeft}>
          Left
        </Button>
        <Button variant="secondary" onClick={middle}>
          Middle
        </Button>
        <Button variant="secondary" onClick={goRight}>
          Right
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
