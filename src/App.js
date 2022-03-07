import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const ListOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputList("");
  };

  const DeleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo-List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={(e) => setInputList(e.target.value)}
            value={InputList}
          />
          <button onClick={ListOfItems}> ADD </button>

          <ol>
            {Items.map((val, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={val}
                  onSelect={DeleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
