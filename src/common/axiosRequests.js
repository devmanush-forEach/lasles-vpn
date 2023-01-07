import axios from "axios";

// const baseurl = " https://lasles-vpn-server.herokuapp.com";

const token = localStorage.getItem("jwt_token");
// const baseurl = "http://localhost:4000";
const baseurl = "http://ec2-3-110-55-252.ap-south-1.compute.amazonaws.com:4000";

export const axiosGet = async (endpoint) => {
  try {
    const url = `${baseurl}${endpoint}`;
    const res = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (error) {
    return { error: error.message };
  }
};

export const axiosPost = async (endpoint, data) => {
  try {
    const url = `${baseurl}${endpoint}`;
    const res = await axios.post(url, data, {
      headers: {
        Authorization: token,
        "Access-Control-Request-Private-Network": true,
      },
    });
    return res;
  } catch (error) {
    return { error: error.message };
  }
};

export const axiosPatch = async (endpoint, data) => {
  try {
    const url = `${baseurl}${endpoint}`;
    const res = await axios.patch(url, data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (error) {
    return { error: error.message };
  }
};
