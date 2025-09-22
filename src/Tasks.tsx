import { useState, type FC } from "react";
import { FaTimes } from "react-icons/fa";
import CreateTodoForm from "./CreateTodo";
import { type Task} from "./SampleData";

type TasksProps = {
  todos: Task[];
  addTodo: (text: string) => void;
  completeTodo: (index: number) => void;
  removeTodo: (id: number) => void;
};

const Tasks:FC<TasksProps>=({ todos, addTodo, completeTodo, removeTodo })=>{
  const [createTodo, setCreateTodo] = useState(false);

  const handleAddTodo = () => {
    setCreateTodo(true);
  };

  const handleCancelTodo = () => {
    setCreateTodo(false);
  };

  const handleSaveTodo = () => {
    setCreateTodo(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Things to do</h2>

      <div className="flex flex-col gap-2">
        {todos.map((todo, index) => (
          <div key={todo.id} className="flex items-center gap-2">
            <input type="checkbox" onChange={() => completeTodo(index)} />
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="text-yellow-600 text-xl ">
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      {!createTodo && (
        <button
          className="w-fit bg-yellow-600 px-4 py-2 rounded-lg text-white"
          onClick={handleAddTodo}
        >
          + Add a Todo
        </button>
      )}

      {createTodo && (
        <CreateTodoForm addTodo={addTodo} onCancel={handleCancelTodo} onSave={handleSaveTodo} />
      )}
    </div>
  );
}

export default Tasks;
