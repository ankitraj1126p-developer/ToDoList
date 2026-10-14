import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "sample-Task", id: uuidv4() }
  ]);

  let [newTodo, setNewTodo] = useState("");

  // Add new task
  let addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos([
      ...todos,
      {
        task: newTodo,
        id: uuidv4()
      }
    ]);

    setNewTodo("");
  };

  // Update input value
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  // Delete Todo
  let deleteTodo = (id) => {
    let copy = todos.filter((todo) => todo.id !== id);
    setTodos(copy);
  };

  // Convert all tasks to uppercase
  let upperCaseAll = () => {
    let newArr = todos.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase()
      };
    });

    setTodos(newArr);
  };

  return (
    <div>
      <h3>TODO LIST!!</h3>

      <hr />

      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />

      <br />
      <br />

      <button onClick={addNewTask}>
        Add Task
      </button>

      <br />
      <br />

      <button onClick={upperCaseAll}>
        Uppercase All
      </button>

      <br />
      <br />

      <hr />

      <h3>Tasks Todo</h3>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task}

              &nbsp;&nbsp;&nbsp;

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}