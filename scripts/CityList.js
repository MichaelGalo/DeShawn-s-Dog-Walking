import { getWalkers } from "./database.js";

const walkers = getWalkers();

export const CityList = () => {
  let citiesHTML = "<ul>"; // 2nd fix

  for (const walker of walkers) {
    citiesHTML += `<li>${walker.city}</li>`;
  }

  citiesHTML += "</ul>"; //maybe 3rd fix

  return citiesHTML; // 1 fix
};
