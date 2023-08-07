import style from "./style.module.css";
import globalStyles from "./globalStyles.module.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Andy");
  // let name = "Andy";

  function changeName() {
    setName("Steve");
    console.log(name);
    return "Steve";
  }

  let result = changeName();
  console.log(name);

  return (
    <>
      <h1 className={style.heading}>Todo App</h1>
      <button onClick={changeName}>Click Me!</button>
      <h2>{name}</h2>
      <ul>
        <li className={globalStyles.heading}>Eat Breakfast</li>
        <input type="checkbox" />
        <li>Eat Snack</li>
        <input type="checkbox" />
        <li>Eat Lunch</li>
        <input type="checkbox" />
        <li>Eat Dinner</li>
        <input type="checkbox" />
      </ul>
    </>
  );
}

export default App;
