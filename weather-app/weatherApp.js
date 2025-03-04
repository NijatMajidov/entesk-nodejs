import axios from 'axios';
import fs from 'fs';

const havaProqnozu = async (city) => {
    const apiKey = '82f25dc4cd81344dca3bfd5e7074a501';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await axios.get(url);
        const weatherData = {
            city: response.data.location.name,
            temperature: response.data.current.temperature,
            weather_description: response.data.current.weather_descriptions[0],
            time: response.data.location.localtime,
        };

        console.log(`City: ${weatherData.city}`);
        console.log(`Temperature: ${weatherData.temperature}°C`);
        console.log(`Weather: ${weatherData.weather_description}`);
        console.log(`Time: ${weatherData.time}`);
        
        fs.appendFileSync('weather_data.json', JSON.stringify(weatherData, null, 2) + ',\n');
        console.log(`Data for ${city} has been written to the file successfully!`);
    } catch (error) {
        console.error('Error', error.response ? error.response.data.message : error.message);
    }
};

const city = process.argv[2] || "Baku";
havaProqnozu(city);
