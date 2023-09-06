import React from "react";

const TaskErrorMessage = ({ error }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{error}</p>
    </div>
  );
};

export default TaskErrorMessage;
