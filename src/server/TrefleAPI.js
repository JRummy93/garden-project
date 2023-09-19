const express = require('express');

const cors = require('cors');

const TREFLE_API_KEY = 'token=u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA';

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
    const response = await fetch('https://trefle.io/api/v1/plants?' + TREFLE_API_KEY);
    res.json(await response.json());
})
app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
