import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import AddTodoForm from "./AddTodoForm";

function TodoList({ pendingTasks, addTask, markAsDone, removeTask }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Pending Tasks</h2>

      <div className="flex flex-col gap-2">
        {pendingTasks.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <input type="checkbox" onChange={() => markAsDone(i)} />
            <span>{t.label}</span>
            <button
              onClick={() => removeTask(t.id)}
              className="text-yellow-600 text-xl"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      {!showForm && (
        <button
          className="w-fit bg-yellow-600 px-4 py-2 rounded-lg text-white"
          onClick={() => setShowForm(true)}
        >
          + Add Task
        </button>
      )}

      {showForm && (
        <AddTodoForm
          addTask={addTask}
          onCancel={() => setShowForm(false)}
          onSave={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default TodoList;
