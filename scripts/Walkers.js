import { getWalkers } from "./database.js"; //fix here

const walkers = getWalkers();

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;

  if (whatWasClickedOn.dataset.type === "walker")
    window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`);
});

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li data-id="${walker.id}" data-city="${walker.city}" data-type="walker">${walker.name}</li>`; // 2 fix
  }

  walkerHTML += "</ul>";

  return walkerHTML; // 1 fix
};
