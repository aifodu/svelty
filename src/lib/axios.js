import axios from "axios";

const UNAUTHORIZED = [401, 403];

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/json";

    const token = localStorage.getItem("ssp12Token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    // const organization = JSON.parse(localStorage.getItem("ssp12Org"));
    // if (organization && organization.id) {
    //   config.params = { ...config.params, org: organization.id };
    // }

    window.Event.$emit("request.initiated");

    return config;
  },
  (error) => {
    Promise.reject(error);
    window.Event.$emit("request.ended");
  }
);

axios.interceptors.response.use(
  function (response) {
    window.Event.$emit("request.ended");
    return response;
  },
  function (error) {
    window.Event.$emit("request.ended");
    const { status } = error.response;

    if (status && UNAUTHORIZED.includes(status)) {
      localStorage.removeItem("ssp12Auth");
      localStorage.removeItem("ssp12User");
      window.Event.$emit("logout");
    }

    return Promise.reject(error);
  }
);

export default axios;
