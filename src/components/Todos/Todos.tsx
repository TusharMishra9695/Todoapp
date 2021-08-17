import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { GoPlus } from "react-icons/go";
import { Button } from "@material-ui/core";
import store from "../../redux/store";
const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
  };
};

const Todos = (props: any) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="adTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
        placeholder="Enter text "
      />

      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "15px" }}
        onClick={() => add()}
      >
        <GoPlus />
      </Button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
