import axios from 'axios';

const searchAPI = async (text) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${text}/images`);

  // console.log(response);
  return response.data.message;
};

export default searchAPI;
