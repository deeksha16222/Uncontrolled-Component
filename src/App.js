import "./styles.css";
import React, { useRef } from "react";
export default function App() {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  function inputCalculate(e) {
    e.preventDefault();
    console.warn("input field 1 value : ", inputRef1.current.value);
    console.warn("input field 2 value : ", inputRef2.current.value);
  }
  return (
    <div className="App">
      <form onSubmit={inputCalculate}>
        <input ref={inputRef1} type="text" /> <br /> <br />
        <input ref={inputRef2} type="password" /> <br /> <br />
        <button> Submit </button>
      </form>
    </div>
  );
}
