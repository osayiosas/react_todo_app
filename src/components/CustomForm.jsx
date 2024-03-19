import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now()
    }); // call the addTask function from App.jsx

    setTask(""); // clear input field
  }; // handle form submit
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Add a task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button type="submit" aria-label="Add Task" className="btn">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
