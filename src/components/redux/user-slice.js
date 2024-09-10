import { createSlice } from "@reduxjs/toolkit";
import { saveStorage, getStorage } from "../helpers/index";
const user = createSlice({
  name: "user",
  initialState: {
    value: getStorage("user") || [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      saveStorage("user", state.value);
    },
    deleteUser: (state, action) => {
      const idToDelete = action.payload;
      state.value = state.value.filter((user) => user.id !== idToDelete);
      saveStorage("user", state.value);
    },
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add, deleteUser, setData } = user.actions;
export default user.reducer;
