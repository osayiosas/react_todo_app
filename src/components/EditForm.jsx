import { useEffect, useState } from "react";

import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => { 
    const closeModalIfEscaped = (e) => {
      if (e.key === 'Escape') {
        closeEditMode();
      }
     }
    window.addEventListener('keydown', closeModalIfEscaped)
   }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };
  // Add a closing parenthesis to this line
  return (
    <div
      role="dailog"
      aria-labelledby="editTask"
      //onClick={}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update TAsk"
          />
          <label htmlFor="editTask" className="label">
            Update TAsk
          </label>
        </div>
        <button
          type="submit"
          aria-label={`confirm edited task to now read ${updatedTaskName}`}
          className="btn"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
