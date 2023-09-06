import React from "react";

const TaskLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12 mb-4"></div>
      <h2 className="text-xl font-semibold">Loading...</h2>
      <p className="text-gray-500">Please wait while we fetch the data.</p>
    </div>
  );
};

export default TaskLoading;
