import { createSlice } from "@reduxjs/toolkit";
import userServices from "../services/user-services";

const anonReducer = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    setAuth(state, action) {
      return action.payload;
    },
  },
});

export const { setAuth } = anonReducer.actions;

export const getUser = () => {
  return async (dispatch) => {
    const user = await userServices.getUser();
    dispatch(setAuth(user));
  };
};

export const signUp = (obj) => {
  return async (dispatch) => {
    try {
      await userServices.userSignup(obj);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};

export const signIn = (obj) => {
  return async (dispatch) => {
    try {
      const user = await userServices.userLogin(obj);
      dispatch(setAuth(user));
      userServices.setToken(user.token);
      window.localStorage.setItem("isLoggedIn", JSON.stringify(user));
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};

export const reSignIn = () => {
  return async (dispatch) => {
    const localUser = window.localStorage.getItem("isLoggedIn");
    if (localUser) {
      const user = JSON.parse(localUser);
      userServices.setToken(user.token);
      dispatch(setAuth(user));
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    window.localStorage.clear();
    dispatch(setAuth(null));
  };
};

export default anonReducer.reducer;
