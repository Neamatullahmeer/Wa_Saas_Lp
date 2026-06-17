import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const api = axios.create({
    baseURL: `${API_BASE_URL}/api`, // 🟢 FIX: /api lagana zaroori tha
    headers: {
        'Content-Type': 'application/json', // 🟢 FIX: JSON header zaroori hai POST request ke liye
    },
    timeout: 3000, // 3 seconds timeout taaki agar backend slow ho ya hang ho jaye toh aage badh jaye
});

export default api;