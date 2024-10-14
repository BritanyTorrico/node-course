// const httpClientPlugin = {
//   get: async (url) => {
//     const resp = await fetch(url);
//     return await resp.json();
//   },

// //   post: async(url,body) => {},
// //   put: async(url,body) => {},
// //   delete: async(id) => {},
// };
const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    return data;
  },
};
module.exports = { http: httpClientPlugin };
