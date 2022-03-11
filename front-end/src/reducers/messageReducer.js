import { createSlice } from "@reduxjs/toolkit";
import userServices from "../services/user-services";

const messageReducers = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    setMsg(state, action) {
      return action.payload;
    },
    appendMsg(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setMsg, appendMsg } = messageReducers.actions;

export const getMessage = () => {
  return async (dispatch) => {
    try {
      const msg = await userServices.getMsg();
      dispatch(setMsg(msg));
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};

export const newMsg = (id, message) => {
  return async (dispatch) => {
    try {
      const msg = await userServices.sendMsg(id, message);
      dispatch(appendMsg(msg));
    } catch (error) {
      console.log(error);
    }
  };
};

export default messageReducers.reducer;
