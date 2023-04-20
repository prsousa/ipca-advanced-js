import axios from "axios";

export const getCountry = (countryCode) =>
  axios
    .get(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((response) => response.data);

export const getBorders = (country) => country.borders || [];

export const languagesAround = (country) =>
  Promise.all(
    getBorders(country).map((countryCode) =>
      getCountry(countryCode).then((country) =>
        country.languages.map((l) => l.name)
      )
    )
  ).then((languagesByCountry) => [...new Set(languagesByCountry.flat())]);

export const languagesAroundInDepth = (country, depth) =>
  languagesAroundInDepthAux(country, depth, new Set()).then((languages) => [
    ...new Set(languages),
  ]);

const languagesAroundInDepthAux = (country, depth, visited) => {
  if (depth <= 0 || visited.has(country.alpha3Code)) return Promise.resolve([]);

  visited.add(country.alpha3Code);

  return Promise.all(
    getBorders(country).map((borderCode) =>
      getCountry(borderCode).then((border) =>
        languagesAroundInDepthAux(border, depth - 1, visited)
      )
    )
  ).then((languagesByCountry) => [
    ...languagesByCountry.flat(),
    ...country.languages.map((l) => l.name),
  ]);
};
