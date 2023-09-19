import axios from 'axios';

async function FetchTrefle() {
  try {
    const response = await fetch("http://localhost:3000");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default FetchTrefle;