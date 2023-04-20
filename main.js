import { getCountry, languagesAroundInDepth } from "./countries.js";

const country = await getCountry("PRT");
const languages = await languagesAroundInDepth(country, 3);
console.log(languages);
