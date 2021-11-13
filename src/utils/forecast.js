const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=74d75d47b73841628b0154631210111&q=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("cannot connect to the weather", undefined);
    } else if (body.error) {
      callback("uable to find location", undefined);
    } else {
      const currentTemp = body.current.temp_f;
      const feelsLike = body.current.feelslike_f;
      const desc = body.current.condition.text;

      callback(
        undefined,
        `${desc}.it is currently ${currentTemp} degree farenheit out.it feels like ${feelsLike} degree fahrenheit outside`
      );
    }
    module.exports = forecast;
  });
};

module.exports = forecast;
