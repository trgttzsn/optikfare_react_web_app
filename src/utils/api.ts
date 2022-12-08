import axios from "axios";

function api() {

  return axios.create({
    baseURL: "https://optikfare.com.tr/api"
  });

};

export default api;
