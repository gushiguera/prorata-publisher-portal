const axios = require('axios').default;

export const useGetUsers = async () => {
  const { data } = await axios.get(`http://localhost:3001/api/v1/users`);
  return data;
};
