const axios = require('axios');




// async function makePerenualAPIRequest() {
//   try {
//     const response = await axios.get('https://perenual.com/api/species-list', {
//       params: {
//         page: 1,
//         key: 'sk-dQpv64f3d160dd5ce2062'
//       }
//     });
    
//     return response.data;
    
//   } catch (error) {
//     console.error('Error making API request:', error);
//     throw error;
//   }
// }

async function makePerenualAPIRequest(req, res) {
  try {
    
    const response = await axios.get('https://trefle.io/api/v1/plants?token=u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA', {
      
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
}


export default makePerenualAPIRequest;

