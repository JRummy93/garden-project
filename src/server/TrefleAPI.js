// import FetchTrefle from '@/pages/api/explore';
import { getSearchForm } from '../components/PlantSearch';
import fetch from 'node-fetch';

const express = require('express');

const cors = require('cors');

const TREFLE_API_KEY = '?token=u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA';

const { plant, edible, toxic, temperature, plantSize } = getSearchForm();

const plantQuery = (plant) => {
  if (plant !== '') {
    search = `&q=${plant}`;
    return search;
  }
  return '?';
}
plantSearchQuery = plantQuery(plant);

// export const trefleAPIURL = 'https://trefle.io/api/v1/plants/search' + TREFLE_API_KEY + plantSearchQuery;

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
    const response = await fetch(trefleAPIURL);
    res.json(await response.json());
})
app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});


export const trefleAPIURL = 'https://trefle.io/api/v1/plants/search' + TREFLE_API_KEY;

export const fetchTrefleData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};