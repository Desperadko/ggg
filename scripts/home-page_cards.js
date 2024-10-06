document.addEventListener("DOMContentLoaded", async () => {
  const cardsPromise = fetchAndParse("../jsons/home-page_cards.json");
  const metadataPromise = fetchAndParse("../jsons/reviews_metadata.json");

  const promises = await Promise.all([cardsPromise, metadataPromise]);

  const [cards, metadata] = promises;

  const regExp = /_/g;
  for (const [key, val] of Object.entries(cards)) {
    const cardsFromSection = val.map((id) => ({ review: metadata[id], id }));
    const filteredKey = key.replace(regExp, "-");
    let containerCarousel = document.getElementById(
      `${filteredKey}_cards_list1`
    );
    let containerList = document.getElementById(`${filteredKey}_cards_list2`);
    placeCards(cardsFromSection, containerCarousel, containerList);
  }
  const event = new CustomEvent("cardsInPlace");
  document.dispatchEvent(event);
});

function placeCards(cards, containerCarousel, containerList) {
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    const { id, review } = cards[i];
    const { image, title, desc, author } = review;
    const isHorizontal = i > 2;
    const listItem = document.createElement(isHorizontal ? "article" : "li");
    if (!isHorizontal) listItem.classList.add("card");
    listItem.innerHTML = `
                <a href="/views/review.html?review=${id}" class="${
      isHorizontal ? "horizontal_card" : "vertical_card stacked"
    }">
                    <img src="${image}" alt="${title.toLowerCase()} image">
                    <div class="card_content">
                        <h3 class="card_title">${title}</h3>
                        <p class="card_description">${desc}</p>
                        <p class="card_author">author: ${author}</p>
                    </div>
                </a>
            `;
    const container = isHorizontal ? containerList : containerCarousel;
    container.appendChild(listItem);
  }
}
