import React, { useState } from "react";

function AddTodoForm({ addTask, onCancel, onSave }) {
  const [text, setText] = useState("");

  const handleSave = () => {
    addTask(text);
    setText("");
    onSave();
  };

  const handleCancel = () => {
    setText("");
    onCancel();
  };

  return (
    <div className="rounded-lg p-4 shadow-md bg-white w-full max-w-md">
      <h3 className="font-semibold mb-2">Create a task</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something to do"
        className="border-2 border-yellow-600 rounded p-2 w-full mb-3"
      />
      <div className="flex gap-2">
        <button
          onClick={handleSave}
          className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="bg-white border border-gray-300 text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
