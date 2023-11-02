import React, { useState } from "react";

let App = () => {
  let [num, setNum] = useState(0);

  let Incre = () => {
    setNum(num + 1);
  };

  let Decre = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Zero is the Minimum Value");
      setNum(0);
    }
  };

  let rest = () => {
    setNum(0);
  };

  return (
    <>
      <div className="idStruc">
        <div className="idStruc_cent">
          <h1>React Web</h1>
          <h1 className="value">{num}</h1>
          <div className="btn_batch">
            <button className="Decreme" onClick={Decre}>
              Decrement
            </button>
            <button className="Increment" onClick={Incre}>
              Increment
            </button>
          </div>
          <button className="reset" onClick={rest}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
