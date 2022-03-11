import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./actions/index";
import { Button, List, Form, Icon, Header } from "semantic-ui-react";

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
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem("lists", JSON.stringify(list));
  // }, [list]);

  return (
    <div className="main_div">
      <div className="center_div">
        <Header className="header" as="h1">
          First Header
        </Header>
        <br />
        <Form>
          <Form.Input
            focus
            error={{ content: "Please enter your work", pointing: "below" }}
            type="text"
            placeholder="Add a Items"
            onChange={(e) => setInputList(e.target.value)}
            value={InputList}
          />
        </Form>
        <Button
          primary
          onClick={() => dispatch(addTodo(InputList), setInputList(""))}
        >
          ADD
        </Button>
        <List>
          {list.map((elem) => {
            return (
              <div className="todo_style" key={elem.id}>
                <Icon
                  ClassName="icon"
                  name="delete"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                />
                <List.Item>{elem.data}</List.Item>
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default ToDo;
