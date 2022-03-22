import axios from "axios";

const getCountry = (countryCode) =>
  axios
    .get(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((response) => response.data);

const getBorders = (country) => country.borders || [];

const countryPromise = getCountry("PRT");

// ...

console.log("debug:", countryPromise);
