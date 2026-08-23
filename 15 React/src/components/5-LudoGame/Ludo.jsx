import { useState } from "react";
export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });
  const [arr, setArr] = useState(["no moves"]);
  let updateblue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
    // arr.push("blue moves"); // Direct mutation should be avoided in React
    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
    console.log(arr);
  };

  return (
    <>
      <h1>THis the ludo board</h1>
      <p>arraya: {arr}</p>
      <p>Blue Moves = {moves.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={updateblue}>
        +1
      </button>

      <p>Yellow Moves = {moves.yellow}</p>
      <button style={{ backgroundColor: "yellow", color: "black" }}>+1</button>

      <p>Green Moves = {moves.green}</p>
      <button style={{ backgroundColor: "green" }}>+1</button>

      <p>Red Moves = {moves.red}</p>
      <button style={{ backgroundColor: "red" }}>+1</button>
    </>
  );
}
