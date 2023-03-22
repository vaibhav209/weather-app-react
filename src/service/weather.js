export const getWeather = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05b11dfcc05297e0e38add2de7b763eb`)
  .then((res) => 
  res.json()
  );

};
