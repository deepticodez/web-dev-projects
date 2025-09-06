import React, { useState, useEffect } from "react";
import HeaderBar from "./HeaderBar";
import TodoList from "./TodoList";
import FinishedList from "./FinishedList";
import Reset from "./Reset";
import { defaultTodos, defaultDone } from "./StarterData";

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("pending") || JSON.stringify(defaultTodos));
  const storedFinished = JSON.parse(localStorage.getItem("finished") || JSON.stringify(defaultDone));

  const [pendingTasks, setPendingTasks] = useState(storedTodos);
  const [doneTasks, setDoneTasks] = useState(storedFinished);

  useEffect(() => {
    localStorage.setItem("pending", JSON.stringify(pendingTasks));
  }, [pendingTasks]);

  useEffect(() => {
    localStorage.setItem("finished", JSON.stringify(doneTasks));
  }, [doneTasks]);

  const addTask = (label) => {
    if (label.trim() !== "") {
      const task = { id: Date.now(), label, done: false };
      const updated = [...pendingTasks, task];
      setPendingTasks(updated);
      localStorage.setItem("pending", JSON.stringify(updated));
    }
  };

  const markAsDone = (index) => {
    const task = pendingTasks[index];
    const remaining = pendingTasks.filter((_, i) => i !== index);
    setPendingTasks(remaining);
    setDoneTasks((prev) => {
      const updated = [...prev, task];
      localStorage.setItem("finishedList", JSON.stringify(updated));
      return updated;
    });
    localStorage.setItem("pending", JSON.stringify(remaining));
  };

  const handleReset = () => {
    const doneIds = defaultDone.map((t) => t.id);
    const remaining = pendingTasks.filter((t) => !doneIds.includes(t.id));

    setPendingTasks(remaining);
    setDoneTasks(defaultDone);

    localStorage.setItem("pending", JSON.stringify(remaining));
    localStorage.setItem("finished", JSON.stringify(defaultDone));
  };

  const restoreTask = (index) => {
    const task = doneTasks[index];
    const remaining = doneTasks.filter((_, i) => i !== index);

    setDoneTasks(remaining);
    setPendingTasks((prev) => [...prev, task]);

    localStorage.setItem("finished", JSON.stringify(remaining));
    localStorage.setItem("pending", JSON.stringify([...pendingTasks, task]));
  };

  const removeTask = (id) => {
    const updated = pendingTasks.filter((t) => t.id !== id);
    setPendingTasks(updated);
    localStorage.setItem("pending", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderBar />
      <main className="flex flex-col px-4 sm:px-10 md:px-20 pt-6 pb-20 gap-6 flex-1">
        <Reset handleReset={handleReset} />
        <TodoList
          pendingTasks={pendingTasks}
          addTask={addTask}
          markAsDone={markAsDone}
          removeTask={removeTask}
        />
        <FinishedList doneTasks={doneTasks} restoreTask={restoreTask} />
      </main>
    </div>
  );
}

export default App;
