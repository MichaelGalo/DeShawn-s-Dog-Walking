import { getCities, getWalkers } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

document.addEventListener("click", (clickEvent) => {
  const cityTarget = clickEvent.target;

  if (cityTarget.dataset.type === "city") {
    window.alert(`${cityTarget.dataset.walkername} is servicing this city.`);
  }
});

export const CityList = () => {
  const uniqueCityIds = new Set();
  let citiesHTML = "<ul>";

  for (const walker of walkers) {
    if (!uniqueCityIds.has(walker.cityId)) {
      uniqueCityIds.add(walker.cityId);

      const cityName = cities.find((city) => city.id === walker.cityId)?.name;

      citiesHTML += `<li data-type="city" data-cityforeignkey="${walker.cityId}" data-walkername="${walker.name}">${cityName}</li>`;
    }
  }

  citiesHTML += "</ul>";

  return citiesHTML;
};
