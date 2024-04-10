import axios from 'axios';

const searchAPI = async (text) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${text}/images`);

  console.log(response);
};

export default searchAPI;
