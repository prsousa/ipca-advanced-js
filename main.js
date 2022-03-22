import { getBorders, getCountry } from "./countries.js";

const countryPromise = getCountry("PRT");

countryPromise
  .then((country) => {
    const borders = getBorders(country);
    console.log(borders);
  })
  .catch((err) => console.error("An error has occurred"));
