import config from '../config/config.js';
export default function getImage() {
    fetch(config.API_URL + "/hgss4-1", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.SECRET_KEY}`
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.images.large);
      })
      .catch(error => console.error('Error:', error));
      
}
