const axios = require('axios');

async function makePerenualAPIRequest(pageCount, key, ) {
  try {
    const response = await axios.get('https://trefle.io/api/v1/plants', {
      params: {
        page: pageCount,
        token: 'u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA'
      }
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
}


export default makePerenualAPIRequest;

