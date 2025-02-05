import config from '../config/config.js';

export default async function getAllCards() {
    try {
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.series:Base supertype:Pokémon`
        , {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.SECRET_KEY}`
        }
      });
      const data = await response.json();
      console.log("Fetched data:", data); 
      let cardSet = "";
      return data; 
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }