import axios from "axios";

export const getCountry = (countryCode) =>
  axios
    .get(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((response) => response.data);

export const getBorders = (country) => country.borders || [];
