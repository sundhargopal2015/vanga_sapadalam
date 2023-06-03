import axios from "axios";

const baseUrlA = "https://64159af08b5d06e4a7b2ae3f.mockapi.io/";
const baseUrlB = "https://6415f10ec42f59a203ab5f6a.mockapi.io/api/v1/";

export const makeRequest = (method, endpoint, data) => {
  return axios({
    method: method,
    url: `${endpoint.includes("meals") ? baseUrlB : baseUrlA}${endpoint}`,
    data: data,
  })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
};
