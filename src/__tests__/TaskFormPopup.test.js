import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskFormPopup from "../components/TaskFormPopup";

describe("TaskFormPopup Component", () => {
  it("should not render the popup when isOpen is false", () => {
    const onClose = jest.fn();
    const onAddTask = jest.fn();

    render(<TaskFormPopup isOpen={false} onClose={onClose} onAddTask={onAddTask} />);

    // Check if the popup is not rendered when isOpen is false
    const popup = screen.queryByTestId("task-form-popup");
    expect(popup).not.toBeInTheDocument();
  });
});
