document.addEventListener("onLoadedSelections", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const type = params.get("type");

  const container = document.getElementById("selection_container");

  fetch("../jsons/reviews_metadata.json")
    .then((response) => response.json())
    .then((data) => {
      const reviews = Object.entries(data);

      if (type) {
        const filtered = filterReviews(category, type, reviews);
        const label = global.categories[category][type].label;
        createCards(type, label, filtered, container, filtered.length);
      } else {
        createCardsByCat(category, reviews, container);
      }
    })
    .catch((error) => console.error(error));
});

function filterReviews(category, type, reviews) {
  return reviews.filter(([_, val]) => val[category].includes(type));
}

function createCards(type, label, reviews, container, count) {
  let section;
  let h2;
  let cardsContainer;
  let article;

  section = document.createElement("section");
  section.id = `${type}_section`;
  section.classList.add("selection_section");

  h2 = document.createElement("h2");
  h2.innerHTML = `
      <a href="${global.links.selection}selection=${type}">${label}</a>
  `;
  section.appendChild(h2);

  cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards_container");

  count = Math.min(reviews.length, 3);

  for (let i = 0; i < count; i++) {
    const [key, val] = reviews[i];
    article = document.createElement("article");
    article.innerHTML = `
      <a href="${global.links.review}review=${key}" class="horizontal_card">
          <img src="${val.image}" alt="${val.title.toLowerCase()} image">
          <div class="card_content">
              <h3 class="card_title">${val.title}</h3>
              <p class="card_description">${val.desc}</p>
              <p class="card_author">author: ${val.author}</p>
          </div>
      </a>
  `;
    cardsContainer.appendChild(article);
  }
  section.appendChild(cardsContainer);
  container.appendChild(section);
}

function createCardsByCat(category, reviews, container) {
  for (const [key, val] of Object.entries(global.categories[category])) {
    const filtered = filterReviews(category, key, reviews);
    createCards(key, val.label, filtered, container, 3);
  }
}
