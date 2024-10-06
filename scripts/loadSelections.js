async function loadSelections() {
  await fetch("../jsons/genres.json")
    .then((response) => response.json())
    .then((data) => {
      global.categories.genres = data;
    })
    .catch((error) => console.error(error));

  await fetch("../jsons/platforms.json")
    .then((response) => response.json())
    .then((data) => {
      global.categories.platforms = data;
    })
    .catch((error) => console.error(error));

  const event = new CustomEvent("onLoadedSelections");
  document.dispatchEvent(event);
}

global.categories = {
  genres: {},
  platforms: {},
};

document.addEventListener("DOMContentLoaded", () => {
  loadSelections();
})