import { getCountry, languagesArroundInDepth } from "./countries.js";

const country = await getCountry("PRT");
const languages = await languagesArroundInDepth(country, 3);
console.log(languages);
