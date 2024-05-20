import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IList } from "../types";
import { initialState } from "./state";

export const getContactList = createAsyncThunk(`get/contactList`, async () => {
  try {
    const response = await fetch("https://contact.herokuapp.com/contact", {
      method: "GET",
    });
    if (response.status === 200) {
      return await response.json();
    }
  } catch (err) {
    return err;
  }
});
export const listSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getContactList.pending, (state) => {
      state.isLoading = true;
      state.data.list = [];
      state.isError = false;
      state.errMsg = null;
    });
    builder.addCase(getContactList.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.isError= false;
      state.errMsg= ""
      state.data.list = payload.data || [];
    });
    builder.addCase(getContactList.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.errMsg = String(payload);
      state.isError = true;
      state.data.list = [];
    });
  },
  reducers: {
    
  },
});
export const {  } = listSlice.actions;
export default listSlice.reducer;
