import { getWalkers } from "./database.js"; //fix here

const walkers = getWalkers();

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li data-id="${walker.id}" data-city="${walker.city}">${walker.name}</li>`; // 2 fix
  }

  walkerHTML += "</ul>";

  return walkerHTML; // 1 fix
};
