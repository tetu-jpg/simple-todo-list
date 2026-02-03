import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read Quran", completed: false },
    { id: 2, title: "Study React", completed: false },
    { id: 3, title: "Complete Project", completed: false },
    { id: 4, title: "Exercise", completed: false },
    { id: 5, title: "Cook Dinner", completed: false },
  ]);
  const [input, setInput] = useState("");

  // Add new task
  const handleAdd = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        title: input,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle checkbox
  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTasks([]);
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default Todo;
