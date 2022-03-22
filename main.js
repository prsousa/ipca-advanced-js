import axios from "axios";

const getCountry = (countryCode) =>
  axios
    .get(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((response) => response.data);

const getBorders = (country) => country.borders || [];

const countryPromise = getCountry("PRT");

countryPromise
  .then((country) => {
    const borders = getBorders(country);
    console.log(borders);
  })
  .catch((err) => console.error("An error has occurred"));
