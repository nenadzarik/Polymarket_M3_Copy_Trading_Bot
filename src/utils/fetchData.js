import axios from 'axios';


const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {

        console.error(`[API Error] Failed to fetch from ${url}:`, error.message);
        throw error;
    }
};

export default fetchData;