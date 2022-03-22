import { getBorders, getCountry } from "./countries.js";

const country = await getCountry("PRT");
const borders = getBorders(country);
console.log(borders);
