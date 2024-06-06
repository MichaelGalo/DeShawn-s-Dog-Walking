import { getPets } from "./database.js";

const pets = getPets();

// below is boiler plate code for adding the click event

// document.addEventListener("click", (theClickEvent) => {
//   const whatWhatClickOn = theClickEvent.target;

//   if (whatWhatClickOn.dataset.type === "walker")
//     window.alert(`This pet is walked by ${whatWhatClickOn.dataset.city}`);
// });

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};
