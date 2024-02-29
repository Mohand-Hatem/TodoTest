import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const pointer = useRef();

  const add = () => {
    const value = pointer.current.value;
    const userData = { completed: false, info: value };
    setData([...data, userData]);
    pointer.current.value = "";
  };

  const checked = (index) => {
    const newdata = [...data];
    data[index].completed = !data[index].completed;
    setData(newdata);
  };

  const dele = (far) => {
    const filterdData = data.filter((item, index) => {
      return index != far;
    });
    setData(filterdData);
  };

  return (
    <div className="App">
      <h2>Welcome To TODO-LIST</h2>
      <div className="box">
        <input type="text" ref={pointer} placeholder="Enter your info" />
        <button onClick={add} className="btn">
          ADD
        </button>
      </div>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" onClick={() => checked(index)} />
              <span className={item.completed ? "line" : ""}>{item.info}</span>
              <button onClick={() => dele(index)}>🗑️</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
