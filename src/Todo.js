import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./actions/index";
import { List, Form, Icon, Header } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";

function ToDo() {
  // const [InputList, setInputList] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  //const [Items, setItems] = useState([]);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: { todo: "" },
  });
  console.log(errors);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ todo: "" });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = ({ todo }) => {
    dispatch(addTodo(todo));
    console.log(todo);
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <Header className="header" as="h1">
          First Header
        </Header>
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="todo"
            render={({ field }) => (
              <Form.Input
                focus
                error={errors.todo && { content: errors.todo.message }}
                type="text"
                placeholder="Add a Items"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <Form.Button
            primary
            //onClick={() => dispatch(addTodo(InputList), setInputList(""))}
          >
            ADD
          </Form.Button>
        </Form>

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
