import axios from 'axios';

const searchAPI = async (text) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID _RIsfjjJ_L7hoFmDHlPL6DvHCQLvgsY_1L4IazJ8RMQ',
    },
    params: {
      query: text,
    },
  });

  return response.data.results;
};

export default searchAPI;
