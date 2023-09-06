import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";

describe("TaskList Component", () => {
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Description 1",
      status: "incomplete",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description 2",
      status: "completed",
    },
  ];

  it("should render task list header", () => {
    render(
      <TaskList
        tasks={tasks}
        openFormPopup={() => {}}
        changeTaskStatus={() => {}}
        onDeleteTask={() => {}}
      />
    );
    const headerElement = screen.getByText("Task List");
    expect(headerElement).toBeInTheDocument();
  });

  it("should render 'Add Task' button", () => {
    render(
      <TaskList
        tasks={tasks}
        openFormPopup={() => {}}
        changeTaskStatus={() => {}}
        onDeleteTask={() => {}}
      />
    );
    const addButton = screen.getByText("Add Task");
    expect(addButton).toBeInTheDocument();
  });

  it("should render a list of tasks", () => {
    render(
      <TaskList
        tasks={tasks}
        openFormPopup={() => {}}
        changeTaskStatus={() => {}}
        onDeleteTask={() => {}}
      />
    );
    const task1Element = screen.getByText("Task 1");
    const task2Element = screen.getByText("Task 2");
    expect(task1Element).toBeInTheDocument();
    expect(task2Element).toBeInTheDocument();
  });

  it("should call 'openFormPopup' function when 'Add Task' button is clicked", () => {
    const openFormPopupMock = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        openFormPopup={openFormPopupMock}
        changeTaskStatus={() => {}}
        onDeleteTask={() => {}}
      />
    );
    const addButton = screen.getByText("Add Task");
    fireEvent.click(addButton);
    expect(openFormPopupMock).toHaveBeenCalled();
  });
});
