import axios from 'axios';

const API_KEY = 'IaQfIqZ54YRdce28v6Bvzz1DUGllp8SugapTKtZpq14N3MZ5F5Axumv6';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const response = await axios.get('search', {
    params: {
      query,
      page,
    },
  });

  return response;
};
