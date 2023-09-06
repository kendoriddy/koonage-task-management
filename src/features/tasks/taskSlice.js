import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  try {
    const response = await fetch("https://drkapp-docs.onrender.com/v1/kennys", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
});

export const createTask = createAsyncThunk("tasks/createTask", async (task) => {
  try {
    const response = await fetch("https://drkapp-docs.onrender.com/v1/kennys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to create task");
  }
});

export const updateTaskById = createAsyncThunk(
  "task/updateTaskById",
  async ({ taskId, updatedData }) => {
    try {
      const response = await fetch(`https://drkapp-docs.onrender.com/v1/kennys/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTask = await response.json();
      return { taskId, updatedTask };
    } catch (error) {
      throw new Error("Failed to update task");
    }
  }
);

const initialState = {
  tasks: [],
  updatedTask: {},
  filter: "all",
  error: null,
  isLoading: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(updateTaskById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTaskById.fulfilled, (state, action) => {
        const { taskId, updatedTask } = action.payload;
        const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = updatedTask;
        }
        state.isLoading = false;
      })
      .addCase(updateTaskById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const allTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
