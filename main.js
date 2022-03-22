import { getCountry, languagesArround } from "./countries.js";

const country = await getCountry("FRA");
const languages = await languagesArround(country);
console.log(languages);
