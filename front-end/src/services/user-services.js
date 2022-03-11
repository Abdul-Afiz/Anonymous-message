import axios from "axios";

const baseUrl = "/api/users";

let token = null;

const setToken = (newtoken) => {
  token = `bearer ${newtoken}`;
};

const getMsg = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios(`${baseUrl}/messages`, config);
  return res.data;
};

const getUser = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios(baseUrl, config);
  return res.data;
};

const userLogin = async (obj) => {
  const res = await axios.post(`${baseUrl}/login`, obj);
  return res.data;
};

const userSignup = async (obj) => {
  const res = await axios.post(`${baseUrl}/signup`, obj);
  return res.data;
};

const sendMsg = async (id, msg) => {
  const message = {
    message: msg,
  };
  const res = await axios.post(`${baseUrl}/messages/${id}`, message);
  return res.data;
};
export default {
  getMsg,
  getUser,
  userLogin,
  userSignup,
  sendMsg,
  setToken,
};
