import axios from "axios";

// const baseurl = " https://lasles-vpn-server.herokuapp.com";
// const baseurl = "https://vercel-test-roan-five.vercel.app";
// const baseurl = "http://localhost:4000";
const baseurl = "http://3.111.147.142:4000";
// const baseurl =
//   "https://ec2-3-111-147-142.ap-south-1.compute.amazonaws.com:4000";
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
