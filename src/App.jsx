import React, { useState } from "react";

function App() {
  const [counter, setCount] = useState(0);
  const addBtn = () => {
    setCount(counter + 1);
    console.log("Clicked");
  };

  const decrementBtn = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
    console.log("Decrement");
  };

  const resetBtn = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <input
          id="counter-title"
          className="counter-title-edit"
          defaultValue="Counter"
          maxLength="20"
        />

        <div className="digits" id="digits">
          {counter}
        </div>
        <div className="btn-row">
          <button
            className="btn btn-minus"
            id="btn-minus"
            onClick={decrementBtn}
          >
            −
          </button>
          <button className="btn btn-plus" id="btn-plus" onClick={addBtn}>
            ＋
          </button>
        </div>
        <button className="btn-reset" id="btn-reset" onClick={resetBtn}>
          Reset
        </button>
      </div>

      <div className="popup-backdrop" id="popup-backdrop">
        <div
          className="popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="popup-title" id="popup-title">
            Reset Counter?
          </div>
          <div className="popup-message">
            Are you sure you want to reset the counter?
            <br />
            This action cannot be undone.
          </div>
          <div className="popup-buttons">
            <button className="popup-btn popup-btn-cancel" id="popup-cancel">
              Cancel
            </button>
            <button className="popup-btn popup-btn-ok" id="popup-ok">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
