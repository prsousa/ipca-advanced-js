import axios from "axios";

export const getCountry = (countryCode) =>
  axios
    .get(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((response) => response.data);

export const getBorders = (country) => country.borders || [];

export const languagesArround = (country) =>
  Promise.all(
    getBorders(country).map((countryCode) =>
      getCountry(countryCode).then((country) =>
        country.languages.map((l) => l.name)
      )
    )
  ).then((languagesByCountry) => [...new Set(languagesByCountry.flat())]);
