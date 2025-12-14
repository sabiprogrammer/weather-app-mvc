import { API_URL } from "./config.js";

export const state = {
  data: {},
};

export const fetchWeatherData = async function () {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    /*
    const {
      name: city,
      sys: { country },
      main: { temp },
      weather,
      wind: { speed },
    } = data;

    const { description, icon } = weather;
    */

    return (state.data = {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    });

    // return data;
  } catch (error) {
    console.error(error);
  }
};
