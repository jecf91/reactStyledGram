import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    "Authorization": "Client-ID LyVuDRa5rePkypZREvjHZJomSV8rFKleECgvYSdK5p0"
  }
})

export default api;