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
    throw new Error("Failed to fetch request types");
  }
});

export const createFinance = createAsyncThunk("finance/createFinance", async (task) => {
  try {
    const response = await fetch("https://drkapp-docs.onrender.com/v1/kennys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to create finance");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to create finance");
  }
});

const initialState = {
  tasks: [],
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
      .addCase(createFinance.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFinance.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(createFinance.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const allTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
