import axios from "axios";

const baseurl = " https://lasles-vpn-server.herokuapp.com";
const configs = {
  withCredentials: true,
  credentials: "include",
};

export const axiosGet = async (endpoint) => {
  try {
    const url = `${baseurl}${endpoint}`;
    const res = await axios.get(url, configs);
    return res;
  } catch (error) {
    return { error: error.message };
  }
};

export const axiosPost = async (endpoint, data) => {
  try {
    const url = `${baseurl}${endpoint}`;
    const res = await axios.post(url, data, configs);
    return res;
  } catch (error) {
    return { error: error.message };
  }
};

export const axiosPatch = async (endpoint, data) => {
  try {
    const url = `${baseurl}${endpoint}`;
    const res = await axios.patch(url, data, configs);
    return res;
  } catch (error) {
    return { error: error.message };
  }
};
