import React, { useState, type FC } from "react";

type CreateTodoFormProps = {
  addTodo: (text: string) => void;
  onCancel: () => void;           
  onSave: () => void;             
};

const CreateTodoForm:FC<CreateTodoFormProps>=({ addTodo, onCancel, onSave })=>{
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSaveTodo = () => {
    if (inputValue.trim() === "") return; 
    addTodo(inputValue);  
    setInputValue("");    
    onSave();           
  };

  const handleCancelTodo = () => {
    setInputValue("");   
    onCancel();          
  };

  return (
    <div className="rounded-lg p-4 shadow-md bg-white w-full max-w-md">
      <h3 className="font-semibold mb-2">Create a todo</h3>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write an article about XState"
        className="border-2 border-yellow-600 rounded p-2 w-full mb-3"
      />

      <div className="flex gap-2">
        <button
          onClick={handleSaveTodo}
          className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={handleCancelTodo}
          className="bg-white border border-gray-300 text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateTodoForm;
