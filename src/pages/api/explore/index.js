const axios = require('axios');

async function makePerenualAPIRequest(pageCount, key, ) {
  try {
    const response = await axios.get('https://perenual.com/api/species-list', {
      params: {
        page: pageCount,
        key: 'sk-dQpv64f3d160dd5ce2062'
      }
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
}


export default makePerenualAPIRequest;

