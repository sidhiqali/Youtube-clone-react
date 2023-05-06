import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  params: {
    hl: 'en',
    gl: 'IN',
  },
  headers: {
    'X-RapidAPI-Key': 'cd19b41ec8mshad3facc227b1424p135546jsn8d97c15b3bd2',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
