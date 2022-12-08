import axios from "axios";

function api() {

  return axios.create({
    baseURL: "https://optikfare.com.tr/esite/api"
  });

};

export default api;
