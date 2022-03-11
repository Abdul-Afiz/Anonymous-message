import { configureStore } from "@reduxjs/toolkit";
import anonReducer from "../reducers/anonReducer";
import messageReducer from "../reducers/messageReducer";

const store = configureStore({
  reducer: {
    auth: anonReducer,
    message: messageReducer,
  },
});

export default store;
