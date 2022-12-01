import Cookie from "js-cookie";

export const setCookie = (name, value) => {
  Cookie.set(name, value);
};

export const getCookie = (name) => {
  Cookie.get(name);
};
