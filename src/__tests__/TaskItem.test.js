import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";

jest.mock("../components/TaskDeletePopup", () => () => <div data-testid="delete-popup" />);

describe("TaskItem Component", () => {
  const task = {
    id: 1,
    name: "Example Task",
    description: "This is an example task",
    status: "incomplete",
  };

  it("should render task name", () => {
    render(<TaskItem task={task} />);
    const taskNameElement = screen.getByText("Example Task");
    expect(taskNameElement).toBeInTheDocument();
  });

  it("should render task description", () => {
    render(<TaskItem task={task} />);
    const taskDescriptionElement = screen.getByText("This is an example task");
    expect(taskDescriptionElement).toBeInTheDocument();
  });

  it("should render task status as 'Incomplete'", () => {
    render(<TaskItem task={task} />);
    const taskStatusElement = screen.getByText("Status: Incomplete");
    expect(taskStatusElement).toBeInTheDocument();
  });

  it("should render 'Mark as Completed' button when status is 'incomplete'", () => {
    render(<TaskItem task={task} />);
    const markAsCompletedButton = screen.getByText("Mark as Completed");
    expect(markAsCompletedButton).toBeInTheDocument();
  });

  it("should render 'Mark as Incomplete' button when status is 'completed'", () => {
    const completedTask = {
      ...task,
      status: "completed",
    };
    render(<TaskItem task={completedTask} />);
    const markAsIncompleteButton = screen.getByText("Mark as Incomplete");
    expect(markAsIncompleteButton).toBeInTheDocument();
  });

  it("should open delete popup when 'Delete' button is clicked", () => {
    render(<TaskItem task={task} />);
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    const deletePopup = screen.getByTestId("delete-popup");
    expect(deletePopup).toBeInTheDocument();
  });
});
