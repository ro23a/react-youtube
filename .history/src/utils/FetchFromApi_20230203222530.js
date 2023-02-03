import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search"
const options = {
    method: 'GET',
    url: BASE_URL,
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
  
  