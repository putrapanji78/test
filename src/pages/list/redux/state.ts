import { ListsState } from "../types";

export const initialState: ListsState = {
    data:{list:[]},
    isLoading: false,
    isError: false,
    errMsg: null,
  };