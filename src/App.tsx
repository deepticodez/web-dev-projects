import { useState, useEffect } from "react";
import Heading from "./Heading";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";
import Refresh from "./Refresh";
import { sampleTasks, sampleTasksDone, type Task } from "./SampleData";

function App() {
  const savedTodos: Task[] = JSON.parse(localStorage.getItem("To-do") || JSON.stringify(sampleTasks));
  const savedCompleted: Task[] = JSON.parse(localStorage.getItem("completed") || JSON.stringify(sampleTasksDone));

  const [todos, setTodos] = useState<Task[]>(savedTodos);
  const [completedTodos, setCompletedTodos] = useState<Task[]>(savedCompleted);

  useEffect(() => {
    localStorage.setItem("To-do", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completedTodos));
  }, [completedTodos]);

  const addTodo = (text: string) => {
    if (text.trim() !== "") {
      const newTodo: Task = {
        id: Date.now(),
        text,
        done: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const completeTodo = (index: number) => {
    const completed = todos[index];
    const remainingTodos = todos.filter((_, i) => i !== index);
    setTodos(remainingTodos);
    setCompletedTodos((prev) => {
      const updatedCompleted = [...prev, completed];
      localStorage.setItem("completedTodos", JSON.stringify(updatedCompleted));
      return updatedCompleted;
    });
    localStorage.setItem("todos", JSON.stringify(remainingTodos));
  };

  const handleRefresh = () => {
    const completedIds = sampleTasksDone.map((task) => task.id);
    const remainingTodos = todos.filter((todo) => !completedIds.includes(todo.id));

    setTodos(remainingTodos);
    setCompletedTodos(sampleTasksDone);

    localStorage.setItem("To-do", JSON.stringify(remainingTodos));
    localStorage.setItem("completed", JSON.stringify(sampleTasksDone));
  };

  const restoreTodo = (index: number) => {
    const restored = completedTodos[index];
    const remainingCompleted = completedTodos.filter((_, i) => i !== index);

    setCompletedTodos(remainingCompleted);
    setTodos((prev) => [...prev, restored]);

    localStorage.setItem("completed", JSON.stringify(remainingCompleted));
    localStorage.setItem("To-do", JSON.stringify([...todos, restored]));
  };

  const removeTodo = (id: number) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    localStorage.setItem("To-do", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Heading />
      <main className="flex flex-col px-4 sm:px-10 md:px-20 pt-6 pb-20 gap-6 flex-1">
        <Refresh handleRefresh={handleRefresh} />
        <Tasks todos={todos} addTodo={addTodo} completeTodo={completeTodo} removeTodo={removeTodo} />
        <CompletedTasks completedTodos={completedTodos} restoreTodo={restoreTodo} />
      </main>
    </div>
  );
}

export default App;
