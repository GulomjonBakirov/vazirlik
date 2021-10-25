import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import {
  registration,
  login as Login,
  logout as Logout,
  loadUser as LoadUser,
} from "../constants/apiConstants";

//Login
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      Login,
      { username: username, password: password },
      config
    );
    localStorage.setItem("access_token", data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

//Register user
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(userData);
    const { data } = await axios.post(registration, userData, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("access_token"),
      },
    };
    const { data } = await axios.get(LoadUser, config);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error,
    });
  }
};
// logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.get(Logout);
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem("access_token");
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
