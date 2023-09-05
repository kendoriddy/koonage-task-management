import React from "react";

const TaskFilters = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <div>
      <h2>Task Filters</h2>
      <label>
        Filter by Status:
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilters;
