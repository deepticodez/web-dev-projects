import type { FC } from "react";

type RefreshProps = {
  handleRefresh: () => void;
};

const Refresh:FC<RefreshProps>=({ handleRefresh })=> {
  return (
    <div className="md:flex-row py-5 flex flex-col items-start gap-2">
      <h1 className="text-3xl font-bold text-gray-800 grow">Things to get done</h1>
      <button
        className="py-2 px-4 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
}

export default Refresh;


