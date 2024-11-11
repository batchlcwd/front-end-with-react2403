import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicAxios } from "../../config/axios.config";
import axios from "axios";

const initialState = {
  notifications: [],
  loading: false,
  error: null,
};

//create async thunk
export const getTodoById = createAsyncThunk(
  "todo/getTodoById",
  async (id, thunkAPI) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  }
);

//creating slice
const notifySlice = createSlice({
  name: "notify",

  initialState: initialState,

  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoById.pending, (state, action) => {
        console.log("loading");
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodoById.fulfilled, (state, action) => {
        console.log("done");
        state.loading = false;
        state.notifications.push(action.payload);
      })
      .addCase(getTodoById.rejected, (state, action) => {
        console.log("error");
        state.loading = false;
        state.error =
          "Error occured while fetching todo " + action.error.message;
        console.log(action.error);
      })
      .addDefaultCase((state) => {
        console.log("default case");
        state.loading = false;
        state.error = null;
      });
  },
});

export default notifySlice.reducer;
export const { addNotification } = notifySlice.actions;
