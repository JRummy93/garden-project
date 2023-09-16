const axios = require('axios');

// async function makePerenualAPIRequest(pageCount, key, ) {
//   try {
//     const response = await axios.get('https://trefle.io/api/v1/plants', {
//       params: {
//         page: pageCount,
//         token: 'u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA'
//       }
//     });
    
//     return response.data;
    
//   } catch (error) {
//     console.error('Error making API request:', error);
//     throw error;
//   }
// }


// export default makePerenualAPIRequest;


async function makeTrefleAPIRequest() {
  
  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://cors-proxy1.p.rapidapi.com/v1',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '568ab69ae0msh71c39f9affe3d57p180706jsnc5941a5cc2a7',
      'X-RapidAPI-Host': 'cors-proxy1.p.rapidapi.com'
    },
    data: {
      url: 'https://trefle.io/api/v1/plants',
      method: 'GET',
      params: {
        token: 'u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA'
      },
      data: {},
      json_data: {},
      headers: {},
      cookies: {}
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
export default makeTrefleAPIRequest;