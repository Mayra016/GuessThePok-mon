import config from '../config/config.js';

export default async function getImage() {
    try {
        const response = await fetch(config.API_URL + "/hgss4-1", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.SECRET_KEY}`
            }
        });
        const data = await response.json();
        console.log("Fetched data:", data); 
        return data.data.images.small; 
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}