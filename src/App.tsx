import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [bitArray, setBitArray] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [decimal, setDecimal] = useState(0);
  const [renderedBits, setRenderedBits] = useState([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);

  useEffect(() => {
    const dec =
      +bitArray[7] +
      +bitArray[6] * 2 +
      +bitArray[5] * 4 +
      +bitArray[4] * 8 +
      +bitArray[3] * 16 +
      +bitArray[2] * 32 +
      +bitArray[1] * 64 +
      +bitArray[0] * 128;

    const bitsRendered = bitArray.map((val) => {
      return val ? "1" : "0";
    });
    setRenderedBits(bitsRendered);
    setDecimal(dec);
  }, [bitArray]);

  return (
    <div className="App">
      <button
        className={bitArray[0] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[0] = !bitArray[0];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[0]}
      </button>
      <button
        className={bitArray[1] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[1] = !bitArray[1];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[1]}
      </button>
      <button
        className={bitArray[2] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[2] = !bitArray[2];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[2]}
      </button>
      <button
        className={bitArray[3] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[3] = !bitArray[3];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[3]}
      </button>
      <button
        className={bitArray[4] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[4] = !bitArray[4];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[4]}
      </button>
      <button
        className={bitArray[5] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[5] = !bitArray[5];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[5]}
      </button>
      <button
        className={bitArray[6] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[6] = !bitArray[6];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[6]}
      </button>
      <button
        className={bitArray[7] ? "ButtonOn" : "ButtonOff"}
        onClick={() => {
          let newArray = bitArray;
          newArray[7] = !bitArray[7];
          setBitArray([...newArray]);
        }}
      >
        {renderedBits[7]}
      </button>

      <div className="Decimal">{decimal}</div>
    </div>
  );
}

export default App;
