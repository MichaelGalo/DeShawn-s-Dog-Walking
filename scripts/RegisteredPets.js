import { getPets, getWalkers } from "./database.js";

const pets = getPets();

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;
  const walkerID = whatWasClickedOn.dataset.walkerforeignkey;
  const allWalkers = getWalkers();

  for (const walker of allWalkers) {
    if (walker.id === parseInt(walkerID)) {
      window.alert(`This pet is being walked by ${walker.name}`);
    }
  }
});

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};
