import React from "react";

function FinishedList({ doneTasks, restoreTask }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Completed</h2>
      <div className="flex flex-col gap-2">
        {doneTasks.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="accent-yellow-500"
              checked={true}
              onChange={() => restoreTask(i)}
            />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinishedList;
