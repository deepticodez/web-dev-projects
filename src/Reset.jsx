import React from "react";

function Reset({ handleReset }) {
  return (
    <div className="md:flex-row py-5 flex flex-col items-start gap-2">
      <h1 className="text-3xl font-bold text-gray-800 grow">Tasks Overview</h1>
      <button
        onClick={handleReset}
        className="py-2 px-4 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white"
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
