import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  //Take new input and creates an object
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // Add list to current list using state
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = [...list];
    newList.splice(id, 1);

    setList(newList);
  };

  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <p>by: Christian McNeil</p>
      <div className="input-add-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Inset chore here..."
        ></input>

        <button onClick={() => addTodo(input)} className="add-btn">
          Add
        </button>
      </div>
      <ul className="list-items">
        {list.map((todo, id) => (
          <li key={id}>
            <span className="text">{todo.todo}</span>
            <button onClick={() => deleteTodo(id)} className="remove-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
