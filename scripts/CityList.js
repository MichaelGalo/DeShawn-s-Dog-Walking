import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (clickEvent) => {
  const cityTarget = clickEvent.target;
  if (cityTarget.dataset.type === "city") {
    window.alert(`${cityTarget.dataset.walkername} is servicing this city.`);
  }
});

export const CityList = () => {
  let citiesHTML = "<ul>"; // 2nd fix

  for (const walker of walkers) {
    citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`;
  }

  citiesHTML += "</ul>"; //maybe 3rd fix

  return citiesHTML; // 1 fix
};
