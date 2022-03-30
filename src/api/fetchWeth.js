import axios from "axios";

const WETH_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "5a37b24012265321c147a3095a1ed97e";

export const fetchWeth = async (query) => {
  const { data } = await axios.get(WETH_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
