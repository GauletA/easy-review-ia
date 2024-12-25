import axios from "axios";


const axiosGemini = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${VITE_API_KEY_GEMINI}`
      }
  });

  export default axiosGemini;