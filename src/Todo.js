import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./actions/index";

// Add ToDo in Local Storage

// const getLocalItems = () => {
//   let list = localStorage.getItem("lists");

//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };

function ToDo() {
  const [InputList, setInputList] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  //const [Items, setItems] = useState([]);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   localStorage.setItem("lists", JSON.stringify(list));
  // }, [list]);

  return (
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
        <button onClick={() => dispatch(addTodo(InputList), setInputList(""))}>
          ADD
        </button>
        <ol>
          {list.map((elem) => {
            return (
              <div className="todo_style" key={elem.id}>
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                />
                <li>{elem.data}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default ToDo;
