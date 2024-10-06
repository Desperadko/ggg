document.addEventListener("onLoadedSelections", async () => {
  const params = new URLSearchParams(window.location.search);
  const reviewId = params.get("review");

  const promises = [
    fetchAndParse("../jsons/reviews.json"),
    fetchAndParse("../jsons/reviews_metadata.json"),
  ];

  const data = await Promise.all(promises);

  const [reviews, metadata] = data;

  const review = { ...reviews[reviewId], ...metadata[reviewId] };

  if (review) {
    const title = document.querySelector("title");
    title.innerText = `GGG/${review.title}`;

    const reviewHeader = document.getElementById("review_header");
    const reviewMain = document.getElementById("review_main");

    reviewHeader.innerHTML = `
                    <div class="img_and_title_container">
                        <img src="${review.banner}" alt="">
                        <div class="title">
                            <h2 class="title_h">${review.title}</h2>
                            <h3 class="title_desc">${review.desc}</h3>
                        </div>
                    </div>
                    <div class="review_details_container">
                        <div class="adp_container">
                            <p>Author: ${review.author}</p>
                            <p>Date: ${review.date_of_publish}</p>
                            <p>Playtime on review publish: ${
                              review.playtime_of_publish
                            }</p>
                        </div>
                        <h3 class="review_score">${review.rating}</h3>
                    </div>
                    <div class="game_details_container">
                        <p>GENRE ${getCategoryLinks(
                          review.genres,
                          global.categories.genres,
                          "genres"
                        )}</p>
                        <p>DEVELOPER ${review.developer}</p>
                        <p>PUBLISHER ${review.publisher}</p>
                        <p>PLATFORM ${getCategoryLinks(
                          review.platforms,
                          global.categories.platforms,
                          "platforms"
                        )}</p>
                        <p>RELEASE DATE ${review.release_date}</p>
                    </div>
                `;

    reviewMain.innerHTML = `
                    <div class="review_main_subsection">
                        <h3>Game Introduction</h3>
                        <p>${review.game_introduction}</p>
                    </div>
                    <div class="review_main_subsection">
                        <h3>Gameplay</h3>
                        <p>${review.gameplay}</p>
                    </div>
                    <div class="review_main_subsection">
                        <h3>Story</h3>
                        <p>${review.story}</p>
                    </div>
                    <div class="review_main_subsection">
                        <h3>Final Thougts</h3>
                        <p>${review.final_thoughts}</p>
                    </div>
                `;
  }
});

function mapToCategories(categoryKeys, category) {
  return categoryKeys.map((key) => ({ item: category[key], key }));
}

function getCategoryLinks(categoryKeys, categoryObj, categoryStr) {
  const items = mapToCategories(categoryKeys, categoryObj);

  let links = "";
  for (const { item, key } of items) {
    links += `<a href="${global.links.selection}category=${categoryStr}&type=${key}">${item.label}</a> `;
  }

  return links;
}
