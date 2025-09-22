import type { FC } from "react";
import {type Task} from "./SampleData"

type CompletedTasksProps = {
  completedTodos: Task[];
  restoreTodo: (index: number) => void;
};

const CompletedTasks:FC<CompletedTasksProps>=({ completedTodos, restoreTodo })=>{
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Things done</h2>
      <div className="flex flex-col gap-2">
        {completedTodos.map((task, index) => (
          <div key={task.id} className="flex items-center gap-2 text-gray-600">
            <input
              className="accent-yellow-500"
              type="checkbox"
              checked={true}
              onChange={() => restoreTodo(index)}
            />
            <span>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedTasks;
