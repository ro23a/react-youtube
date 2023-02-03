import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    method: 'GET',
    params: {
      q: 'music',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'bcc50f838cmsh3301586e7c7e2aap1fc29djsnc31d56e0a6fd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const fetchFromApi = async (url) => {
    const { data }= await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}