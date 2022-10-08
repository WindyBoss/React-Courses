import axios from 'axios';
const API_KEY = '529fa64a859aadf1be4cc35dbd383306';

async function getWeatherData(query) {
  const res = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${API_KEY}`
  );

  if (res.data.length === 0) {
    throw new Error(
      'City or Region with such name was not found, Please try again'
    );
  }

  const { lat, lon } = res.data[0];

  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  if (weatherData.data.length === 0) {
    throw new Error('Sorry Something Went Wrong, Please try Again');
  }

  const data5Days = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return { currentWeather: weatherData.data, data5Days: data5Days.data };
}

export { getWeatherData };
